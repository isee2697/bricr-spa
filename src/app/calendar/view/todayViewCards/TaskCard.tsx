import React from 'react';
import { DateTime } from 'luxon';
import clsx from 'classnames';

import { Card, CardContent, Grid, Typography, UserAvatar } from 'ui/atoms';
import {
  FollowUpRectangleIcon,
  LockRectangleIcon,
  PriorityHighIcon,
  PriorityLowIcon,
  PriorityMediumIcon,
  UserRectangleIcon,
} from 'ui/atoms/icons';
import { TaskLabel, TaskPriority } from 'api/types';

import { TaskCardProps } from './TodayViewCards.types';
import { useStyles } from './TaskCard.styles';

export const TaskCard = ({ task }: TaskCardProps) => {
  const { taskIndex, title, assigneeDetail, startDate, deadline, label, priority } = task;
  const classes = useStyles();

  const deadlineDate = deadline && DateTime.fromISO(deadline);
  const remainingMinutes = deadlineDate && Math.floor(deadlineDate.diffNow('minutes').minutes);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <Typography
          variant="h6"
          className={clsx(classes.expireInfo, remainingMinutes && remainingMinutes < 60 && 'lessThanOneHour')}
        >
          {startDate && DateTime.fromISO(startDate).toLocaleString(DateTime.TIME_SIMPLE)} -{' '}
          {deadline && DateTime.fromISO(deadline).toLocaleString(DateTime.TIME_SIMPLE)}
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
  );
};
