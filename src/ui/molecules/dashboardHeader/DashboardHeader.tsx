import React from 'react';
import { DateTime } from 'luxon';

import { Typography, Grid, Emoji } from 'ui/atoms';

import { DashboardHeaderProps } from './DashboardHeader.types';
import { useStyles } from './DashboardHeader.styles';

export const DashboardHeader = ({ children }: DashboardHeaderProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1" className={classes.header}>
        <Emoji>{children}</Emoji>
      </Typography>

      <Typography variant="h5" className={classes.date}>
        {DateTime.local().toLocaleString(DateTime.DATE_HUGE)}
      </Typography>
    </Grid>
  );
};
