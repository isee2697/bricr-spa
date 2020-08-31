import React from 'react';

import { Box, Typography, Grid, UserAvatar } from 'ui/atoms';
import {
  UserRectangleIcon,
  PriorityHighIcon,
  PriorityMediumIcon,
  PriorityLowIcon,
  LockRectangleIcon,
  FollowUpRectangleIcon,
} from 'ui/atoms/icons';
import { TaskPriority, TaskLabel } from '../Tasks.enum';

import { TasksSwimlaneItemProps } from './TasksSwimlaneItem.types';
import { useStyles } from './TasksSwimlaneItem.styles';

export const TasksSwimlaneItem = ({ task }: TasksSwimlaneItemProps) => {
  const classes = useStyles();
  const { id, title, expireDate, label, priority, assignedTo } = task;
  const daysLeft = dateDiffInDays(new Date(), expireDate);

  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.expireInfo}>
        {daysLeft} days Left
      </Typography>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Grid container>
        {/* TODO: Update this class name once provided info about this section */}
        <Grid item className={classes.taskLocked}>
          {label === TaskLabel.BUSINESS && (
            <UserRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
          )}
          {label === TaskLabel.PRIVATE && (
            <LockRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
          )}
          {label === TaskLabel.FOLLOW_UP && (
            <FollowUpRectangleIcon viewBox="0 0 16 16" classes={{ root: classes.taskLockedIcon }} />
          )}
        </Grid>
        <Grid item>
          {priority === TaskPriority.HIGH && (
            <PriorityHighIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="error" />
          )}
          {priority === TaskPriority.MEDIUM && (
            <PriorityMediumIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="error" />
          )}
          {priority === TaskPriority.LOW && (
            <PriorityLowIcon viewBox="0 0 16 16" classes={{ root: classes.priorityIcon }} color="action" />
          )}
        </Grid>
        <Grid item className={classes.flexGrowOne} />
        <Grid item>
          <Typography variant="h5" className={classes.taskId}>
            {id}
          </Typography>
        </Grid>
        <Grid item>
          <UserAvatar name={assignedTo.name} className={classes.avatar} />
        </Grid>
      </Grid>
    </Box>
  );
};

const dateDiffInDays = (date1: Date, date2: Date) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);

  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24),
  );
};
