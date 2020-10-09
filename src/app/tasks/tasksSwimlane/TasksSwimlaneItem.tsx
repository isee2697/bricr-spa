import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';

import { Box, Grid, Typography, UserAvatar } from 'ui/atoms';
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
  const [, drag] = useDrag({
    item: {
      type: 'UpdateTaskStatus',
      ...task,
    },
  });

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'UpdateTaskStatus',
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      isDrag: !!monitor.canDrop(),
    }),
  });

  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const { id, taskIndex, title, assigneeDetail, deadline, label, priority } = task;
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
      <div ref={drop}>
        <Box className={classes.root}>
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
              {label === TaskLabel.Business && (
                <UserRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
              )}
              {label === TaskLabel.Private && (
                <LockRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
              )}
              {label === TaskLabel.FollowUp && (
                <FollowUpRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
              )}
            </Grid>
            <Grid item>
              {priority === TaskPriority.High && (
                <PriorityHighIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="error" />
              )}
              {priority === TaskPriority.Medium && (
                <PriorityMediumIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="error" />
              )}
              {priority === TaskPriority.Low && (
                <PriorityLowIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="action" />
              )}
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
        </Box>
        {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
      </div>
    </div>
  );
};
