import React from 'react';

import { NavBreadcrumbs, Typography } from 'ui/atoms';

import { TaskDetailsHeaderProps } from './TaskDetailsHeader.types';
import { useStyles } from './TaskDetailsHeader.styles';

export const TaskDetailsHeader = ({ title }: TaskDetailsHeaderProps) => {
  const classes = useStyles();

  return (
    <>
      <NavBreadcrumbs />
      <Typography variant="h1" className={classes.taskTitle}>
        {title}
      </Typography>
    </>
  );
};
