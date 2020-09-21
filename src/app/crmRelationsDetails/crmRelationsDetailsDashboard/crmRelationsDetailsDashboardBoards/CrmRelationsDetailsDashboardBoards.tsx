import React from 'react';

import { Grid } from 'ui/atoms';

import { useStyles } from './CrmRelationsDetailsDashboardBoards.styles';
import { CrmRelationsDetailsDashboardBoardsProperties } from './crmRelationsDetailsDashboardBoardsProperties/CrmRelationsDetailsDashboardBoardsProperties';
import { CrmRelationsDetailsDashboardBoardsTimeline } from './crmRelationsDetailsDashboardBoardsTimeline/CrmRelationsDetailsDashboardBoardsTimeline';
import { CrmRelationsDetailsDashboardBoardsAgenda } from './crmRelationsDetailsDashboardBoardsAgenda/CrmRelationsDetailsDashboardBoardsAgenda';
import { CrmRelationsDetailsDashboardBoardsBrokers } from './crmRelationsDetailsDashboardBoardsBrokers/CrmRelationsDetailsDashboardBoardsBrokers';

export const CrmRelationsDetailsDashboardBoards = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={8}>
        <CrmRelationsDetailsDashboardBoardsProperties />
        <CrmRelationsDetailsDashboardBoardsTimeline />
      </Grid>
      <Grid item xs={12} md={4}>
        <CrmRelationsDetailsDashboardBoardsAgenda />
        <CrmRelationsDetailsDashboardBoardsBrokers />
      </Grid>
    </Grid>
  );
};
