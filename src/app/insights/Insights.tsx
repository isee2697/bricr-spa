import React from 'react';

import { EntityTypeProvider } from 'app/shared/entityType';
import { Grid, Box } from 'ui/atoms';

import { InsightsProps } from './Insights.types';
import { InsightsSidebarMenu } from './sidebarMenu/SidebarMenu';
import { Header } from './header/Header';

export const Insights = ({ breadcrumbs, entityType, path }: InsightsProps) => {
  return (
    <EntityTypeProvider entityType={entityType}>
      {breadcrumbs}
      <Grid container spacing={0}>
        <InsightsSidebarMenu
          dashboards={[
            { id: '0001', title: 'Allocate' },
            { id: '0002', title: 'Viewers' },
          ]}
        />
        <Grid item xs={12} sm={8} md={9} lg={10}>
          <Box pr={3} pt={3} pl={3}>
            <Header />
          </Box>
        </Grid>
      </Grid>
    </EntityTypeProvider>
  );
};
