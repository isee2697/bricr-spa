import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { NavBreadcrumbs, Typography, Box, IconButton } from 'ui/atoms';
import { BellIcon, LeaveIcon, MenuIcon, RefreshIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { TaskDetailsHeaderProps } from './TaskDetailsHeader.types';
import { useStyles } from './TaskDetailsHeader.styles';

export const TaskDetailsHeader = ({ title, onFollowUpTask }: TaskDetailsHeaderProps) => {
  const classes = useStyles();
  const { push } = useHistory();
  const theme = useTheme();

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <NavBreadcrumbs />
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="cetner" mr={3}>
            <IconButton variant="rounded" size="small" className={classes.btnRefresh} onClick={onFollowUpTask}>
              <RefreshIcon color={theme.palette.gray.main} />
            </IconButton>
            <IconButton variant="rounded" size="small" className={classes.btnNotify}>
              <BellIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton
              variant="rounded"
              size="small"
              onClick={() => push(AppRoute.tasks)}
              className={classes.btnShare}
            >
              <LeaveIcon />
            </IconButton>
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Typography variant="h1" className={classes.taskTitle}>
        {title}
      </Typography>
    </>
  );
};
