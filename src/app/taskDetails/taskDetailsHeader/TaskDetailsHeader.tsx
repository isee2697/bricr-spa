import React from 'react';
import { useHistory } from 'react-router-dom';

import { NavBreadcrumbs, Typography, Box, IconButton } from 'ui/atoms';
import { MenuIcon, ShareIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { TaskDetailsHeaderProps } from './TaskDetailsHeader.types';
import { useStyles } from './TaskDetailsHeader.styles';

export const TaskDetailsHeader = ({ title }: TaskDetailsHeaderProps) => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <NavBreadcrumbs />
        <Box>
          <IconButton variant="rounded" size="small" onClick={() => push(AppRoute.tasks)} className={classes.btnShare}>
            <ShareIcon />
          </IconButton>
          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="h1" className={classes.taskTitle}>
        {title}
      </Typography>
    </>
  );
};
