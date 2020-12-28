import React from 'react';
import { DateTime } from 'luxon';

import { Typography, IconButton, Grid, Emoji } from 'ui/atoms';
import { SettingsIcon } from 'ui/atoms/icons';

import { DashboardHeaderProps } from './DashboardHeader.types';
import { useStyles } from './DashboardHeader.styles';

export const DashboardHeader = ({ children, onFilterClick }: DashboardHeaderProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1" className={classes.header}>
        <Emoji>{children}</Emoji>
      </Typography>

      <Typography variant="h5" className={classes.date}>
        {DateTime.local().toLocaleString(DateTime.DATE_HUGE)}
      </Typography>

      <IconButton variant="rounded" size="small" onClick={onFilterClick}>
        <SettingsIcon />
      </IconButton>
    </Grid>
  );
};
