import React from 'react';
import { Grid } from 'ui/atoms';
import { DashboardHeader } from 'ui/molecules';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { useLocale } from 'hooks/useLocale/useLocale';

import { DashboardEmailsContainer } from './dashboardEmails/DashboardEmailsContainer';
import { DashboardOrdersContainer } from './dashboardOrders/DashboardOrdersContainer';
import { DashboardStatsContainer } from './dashboardStats/DashboardStatsContainer';
import { DashboardAgendaContainer } from './dashboardAgenda/DashboardAgendaContainer';
import { DashboardVisitedPagesContainer } from './dashboardVisitedPages/DashboardVisitedPagesContainer';
import { useStyles } from './Dashboard.styles';

export const Dashboard = () => {
  const { user } = useAuthState();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        <DashboardHeader onFilterClick={() => {}}>
          {formatMessage({ id: 'dashboard.welcome' })} {user?.firstName} 👋
        </DashboardHeader>

        <DashboardStatsContainer />

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <DashboardEmailsContainer />
              </Grid>
              <Grid item xs={12}>
                <DashboardOrdersContainer />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <DashboardAgendaContainer />
              </Grid>
              <Grid item xs={12}>
                <DashboardVisitedPagesContainer />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
