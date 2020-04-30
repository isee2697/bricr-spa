import React from 'react';

import { Grid } from 'ui/atoms';
import { DashboardHeader } from 'ui/molecules';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { DashboardEmailsContainer } from './dashboardEmails/DashboardEmailsContainer';
import { DashboardOrdersContainer } from './dashboardOrders/DashboardOrdersContainer';
import { DashboardStatsContainer } from './dashboardStats/DashboardStatsContainer';
import { DashboardAgendaContainer } from './dashboardAgenda/DashboardAgendaContainer';
import { DashboardVisitedPagesContainer } from './dashboardVisitedPages/DashboardVisitedPagesContainer';

export const Dashboard = () => {
  const { user } = useAuthState();

  return (
    <>
      <DashboardHeader onFilterClick={() => {}}>
        Welcome, {user?.firstName}{' '}
        <span role="img" aria-label="hi1">
          👋
        </span>
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
    </>
  );
};
