import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { EntityTypeProvider } from 'app/shared/entityType';
import { Grid, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';

import { InsightsProps } from './Insights.types';
import { InsightsSidebarMenu } from './sidebarMenu/SidebarMenu';
import { Charts } from './charts/Charts';
import { ChartDetailContainer } from './chartDetail/ChartDetailContainer';
import { DashboardsContainer } from './dashboards/DashboardsContainer';

export const Insights = ({ breadcrumbs, entityType, path }: InsightsProps) => {
  return (
    <EntityTypeProvider entityType={entityType}>
      <Switch>
        <Route path={`${AppRoute.chartDetail}`} component={ChartDetailContainer} />
        <Route
          render={() => (
            <>
              {breadcrumbs}
              <Grid container spacing={0}>
                <InsightsSidebarMenu
                  dashboards={[
                    { id: '0001', title: 'Allocate' },
                    { id: '0002', title: 'Viewers' },
                  ]}
                  charts={[
                    {
                      id: 'bricr',
                      title: 'Bricr chart',
                      count: 1,
                    },
                    {
                      id: 'custom',
                      title: 'Custom chart',
                      count: 4,
                    },
                  ]}
                />
                <Grid item xs={12} sm={8} md={9} lg={10}>
                  <Box pr={3} pt={3} pl={3}>
                    <Switch>
                      <Route path={`${path}/dashboards`} component={DashboardsContainer} />
                      <Route path={`${path}/charts`} component={Charts} />
                      <Redirect to={`${path}/dashboards`} />
                    </Switch>
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        />
      </Switch>
    </EntityTypeProvider>
  );
};
