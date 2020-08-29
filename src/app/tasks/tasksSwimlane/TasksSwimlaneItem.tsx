import React from 'react';

import { Box, Typography, Grid, UserAvatar } from 'ui/atoms';
import { UserRectangleIcon, PriorityHighIcon, PriorityMediumIcon, PriorityLowIcon } from 'ui/atoms/icons';
import { TaskPriority } from '../Tasks.enum';

import { TasksSwimlaneItemProps } from './TasksSwimlaneItem.types';
import { useStyles } from './TasksSwimlaneItem.styles';

export const TasksSwimlaneItem = ({ task }: TasksSwimlaneItemProps) => {
  const classes = useStyles();
  const { id, title, expireDate, priority, assignedTo } = task;
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
        <Grid item>
          <UserRectangleIcon />
        </Grid>
        <Grid item>
          {priority === TaskPriority.HIGH && <PriorityHighIcon color="error" />}
          {priority === TaskPriority.MEDIUM && <PriorityMediumIcon color="error" />}
          {priority === TaskPriority.LOW && <PriorityLowIcon color="action" />}
        </Grid>
        <Grid item></Grid>
        <Grid item>
          <Typography variant="h5">{id}</Typography>
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
