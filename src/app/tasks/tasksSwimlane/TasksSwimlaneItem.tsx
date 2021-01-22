import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import { useTheme } from '@material-ui/core';

import { Box, Loader, Typography, UserAvatar, Card, CardContent, ProgressFilling, IconButton } from 'ui/atoms';
import {
  BellIcon,
  BuildingIcon,
  CalendarIcon,
  CrmIcon,
  FollowUpRectangleIcon,
  GraphIcon,
  LockRectangleIcon,
  PriorityHighIcon,
  PriorityLowIcon,
  PriorityMediumIcon,
  RefreshIcon,
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
      tab,
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
  const theme = useTheme();

  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const { id, taskIndex, title, assigneeDetail, deadline, label, priority, isUpdating } = task;
  const deadlineDate = deadline && DateTime.fromISO(deadline);
  const remainingMinutes = deadlineDate && Math.floor(deadlineDate.diffNow('minutes').minutes);
  const expireInfo =
    deadlineDate && remainingMinutes
      ? tab === TasksTab.Overdue
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
          )
      : '-';

  return (
    <div onClick={() => push(AppRoute.taskDetails.replace(':id', id))} ref={drag}>
      <div ref={!isUpdating ? drop : undefined}>
        {isUpdating && <Loader />}
        <Card className={clsx(classes.root, isDragging && 'dragging')}>
          <CardContent className={classes.card}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mr={-1}>
              <Typography
                variant="h6"
                className={clsx(
                  classes.expireInfo,
                  tab === TasksTab.Overdue && 'overdue',
                  remainingMinutes && remainingMinutes < 60 && 'lessThanOneHour',
                )}
              >
                {expireInfo}
              </Typography>
              <IconButton size="small" variant="rounded">
                <BellIcon />
              </IconButton>
            </Box>
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              {/* TODO: Update this class name once provided info about this section */}
              <Box display="flex" alignItems="center">
                {label === TaskLabel.Business && <UserRectangleIcon classes={{ root: classes.taskLockedIcon }} />}
                {label === TaskLabel.Private && <LockRectangleIcon classes={{ root: classes.taskLockedIcon }} />}
                {label === TaskLabel.FollowUp && <FollowUpRectangleIcon classes={{ root: classes.taskLockedIcon }} />}
                {priority === TaskPriority.High && (
                  <PriorityHighIcon
                    width="16px"
                    height="16px"
                    viewBox={`0 0 ${theme.spacing(2)}px ${theme.spacing(2)}px`}
                    classes={{ root: classes.priorityIcon }}
                  />
                )}
                {priority === TaskPriority.Medium && (
                  <PriorityMediumIcon
                    width="16"
                    height="16"
                    viewBox={`0 0 ${theme.spacing(2)}px ${theme.spacing(2)}px`}
                    classes={{ root: classes.priorityIcon }}
                  />
                )}
                {priority === TaskPriority.Low && (
                  <PriorityLowIcon
                    width="16"
                    height="16"
                    viewBox={`0 0 ${theme.spacing(2)}px ${theme.spacing(2)}px`}
                    classes={{ root: classes.priorityIcon }}
                  />
                )}
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton size="small" variant="rounded" className={classes.refreshButton}>
                  <RefreshIcon color={theme.palette.gray.main} />
                </IconButton>
                <Box>
                  <Typography variant="h5" className={classes.taskId}>
                    {`BRICR-${taskIndex}`}
                  </Typography>
                </Box>
                <Box>
                  <UserAvatar
                    name={assigneeDetail ? `${assigneeDetail.firstName} ${assigneeDetail.lastName}` : 'User'}
                    className={classes.avatar}
                  />
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" width="100%" justifyContent="space-between" mt={1.5} mb={1.5}>
              <Box className={clsx(classes.linkItem, 'selected')}>
                <BuildingIcon color="inherit" />
              </Box>
              <Box className={classes.linkItem}>
                <CrmIcon color="inherit" />
              </Box>
              <Box className={classes.linkItem}>
                <GraphIcon color="inherit" />
              </Box>
              <Box className={classes.linkItem}>
                <CalendarIcon color="inherit" />
              </Box>
            </Box>
            <Typography variant="h6" color="textSecondary">
              {formatMessage({ id: 'tasks.details.subtasks' })}:{' '}
              {formatMessage({ id: 'tasks.details.subtasks.completed' }, { percentage: 33, completed: 1, total: 3 })}
            </Typography>
            <ProgressFilling progress={0.6} fullWidth />
          </CardContent>
        </Card>
        {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
      </div>
    </div>
  );
};
