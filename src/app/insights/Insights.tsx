import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { EntityTypeProvider } from 'app/shared/entityType';
import { Grid, Box } from 'ui/atoms';

import { InsightsProps } from './Insights.types';
import { InsightsSidebarMenu } from './sidebarMenu/SidebarMenu';
import { Dashboards } from './dashboards/Dashboards';
import { Charts } from './charts/Charts';
import { ChartDetailContainer } from './chartDetail/ChartDetailContainer';

export const Insights = ({ breadcrumbs, entityType, path }: InsightsProps) => {
  return (
    <EntityTypeProvider entityType={entityType}>
      <Switch>
        <Route path={`${path}/charts/:id`} component={ChartDetailContainer} />
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
                      id: '0001',
                      title: 'Bricr chart',
                      count: 1,
                    },
                    {
                      id: '0002',
                      title: 'Custom chart',
                      count: 4,
                    },
                  ]}
                />
                <Grid item xs={12} sm={8} md={9} lg={10}>
                  <Box pr={3} pt={3} pl={3}>
                    <Switch>
                      <Route path={`${path}/dashboards`} component={Dashboards} />
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
