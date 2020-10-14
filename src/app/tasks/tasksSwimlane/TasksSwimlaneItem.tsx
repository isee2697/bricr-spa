import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';

import { Box, Grid, Loader, Typography, UserAvatar, Card, CardContent } from 'ui/atoms';
import {
  FollowUpRectangleIcon,
  LockRectangleIcon,
  PriorityHighIcon,
  PriorityLowIcon,
  PriorityMediumIcon,
  UserRectangleIcon,
} from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TaskLabel, TaskPriority } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { TasksTab } from '../Tasks.types';

import { TasksSwimlaneItemProps } from './TasksSwimlaneItem.types';
import { useStyles } from './TasksSwimlaneItem.styles';

export const TasksSwimlaneItem = ({ tab, task }: TasksSwimlaneItemProps) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'UpdateTaskStatus',
      ...task,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'UpdateTaskStatus',
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const { id, taskIndex, title, assigneeDetail, deadline, label, priority, isUpdating } = task;
  const deadlineDate = DateTime.fromISO(deadline);
  const remainingMinutes = Math.floor(deadlineDate.diffNow('minutes').minutes);
  const expireInfo =
    tab === TasksTab.Overdue
      ? deadlineDate.toLocaleString(DateTime.DATETIME_MED)
      : Math.abs(remainingMinutes) < 60 * 24
      ? Math.abs(remainingMinutes) < 60
        ? formatMessage({ id: 'tasks.less_than_one_hour' })
        : formatMessage(
            { id: 'tasks.details.remainingHours' },
            {
              hours: Math.floor(remainingMinutes / 60),
            },
          )
      : formatMessage(
          { id: 'tasks.details.remainingDays' },
          {
            days: Math.floor(remainingMinutes / 60 / 24),
          },
        );

  return (
    <div onClick={() => push(AppRoute.taskDetails.replace(':id', id))} ref={drag}>
      <div ref={!isUpdating ? drop : undefined}>
        {isUpdating && <Loader />}
        <Card className={clsx(classes.root, isDragging && 'dragging')}>
          <CardContent className={classes.card}>
            <Typography
              variant="h6"
              className={clsx(
                classes.expireInfo,
                tab === TasksTab.Overdue && 'overdue',
                remainingMinutes < 60 && 'lessThanOneHour',
              )}
            >
              {expireInfo}
            </Typography>
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
            <Grid container>
              {/* TODO: Update this class name once provided info about this section */}
              <Grid item className={classes.taskLocked}>
                {label === TaskLabel.Business && <UserRectangleIcon classes={{ root: classes.taskLockedIcon }} />}
                {label === TaskLabel.Private && <LockRectangleIcon classes={{ root: classes.taskLockedIcon }} />}
                {label === TaskLabel.FollowUp && <FollowUpRectangleIcon classes={{ root: classes.taskLockedIcon }} />}
              </Grid>
              <Grid item>
                {priority === TaskPriority.High && <PriorityHighIcon classes={{ root: classes.priorityIcon }} />}
                {priority === TaskPriority.Medium && <PriorityMediumIcon classes={{ root: classes.priorityIcon }} />}
                {priority === TaskPriority.Low && <PriorityLowIcon classes={{ root: classes.priorityIcon }} />}
              </Grid>
              <Grid item className={classes.flexGrowOne} />
              <Grid item>
                <Typography variant="h5" className={classes.taskId}>
                  {`BRICR-${taskIndex}`}
                </Typography>
              </Grid>
              <Grid item>
                <UserAvatar
                  name={assigneeDetail ? `${assigneeDetail.firstName} ${assigneeDetail.lastName}` : 'User'}
                  className={classes.avatar}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
      </div>
    </div>
  );
};
