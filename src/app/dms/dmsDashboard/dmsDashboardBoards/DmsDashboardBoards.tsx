import React from 'react';

import { Grid } from 'ui/atoms';

import { useStyles } from './DmsDashboardBoards.styles';
import { DmsDashboardBoardsSigned } from './dmsDashboardBoardsSigned/DmsDashboardBoardsSigned';
import { DmsDashboardBoardsTimeline } from './dmsDashboardBoardsTimeline/DmsDashboardBoardsTimeline';
import { DmsDashboardBoardsAgenda } from './dmsDashboardBoardsAgenda/DmsDashboardBoardsAgenda';
import { DmsDashboardBoardsBrokers } from './dmsDashboardBoardsBrokers/DmsDashboardBoardsBrokers';

export const DmsDashboardBoards = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={8}>
        <DmsDashboardBoardsSigned />
        <DmsDashboardBoardsTimeline />
      </Grid>
      <Grid item xs={12} md={4}>
        <DmsDashboardBoardsAgenda />
        <DmsDashboardBoardsBrokers />
      </Grid>
    </Grid>
  );
};
