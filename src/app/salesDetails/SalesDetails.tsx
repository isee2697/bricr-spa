import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { SalesDetailsSidebarMenu } from './sidebarMenu/SidebarMenu';
import { DashboardContainer } from './dashboard/DashboardContainer';

export const SalesDetails = () => {
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <>
      <Grid container spacing={0} wrap="nowrap">
        <NavBreadcrumb title={formatMessage({ id: 'header.links.sales_details' })} />
        <SalesDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
        <Grid
          item
          xs={12}
          sm={isSidebarVisible ? 8 : 12}
          md={isSidebarVisible ? 9 : 12}
          lg={isSidebarVisible ? 10 : 12}
        >
          <Box pr={3} pt={3} pl={3}>
            <Switch>
              <Route
                path={`${AppRoute.salesDetails}/dashboard`}
                render={() => (
                  <DashboardContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                )}
              />
              <Redirect to={{ pathname: `${AppRoute.salesDetails}/dashboard` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
