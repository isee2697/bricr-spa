import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { SalesDetailsSidebarMenu } from './sidebarMenu/SidebarMenu';
import { DashboardContainer } from './dashboard/DashboardContainer';
import { GeneralContainer } from './general/GeneralContainer';
import { ClientContainer } from './client/ClientContainer';
import { ContractsContainer } from './contracts/ContractsContainer';
import { BrokerageContainer } from './brokerage/BrokerageContainer';
import { CostsContainer } from './costs/CostsContainer';
import { DatesContainer } from './dates/DatesContainer';

export const SalesDetails = () => {
  const { formatMessage } = useLocale();
  const { params } = useRouteMatch();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <Grid container spacing={0} wrap="nowrap">
      <NavBreadcrumb
        title={formatMessage({ id: 'header.links.sales_details' })}
        to={joinUrlParams(AppRoute.salesDetails, params)}
      />
      <SalesDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
      <Grid item xs={12} sm={isSidebarVisible ? 8 : 12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12}>
        <Box pr={3} pt={3} pl={3}>
          <Switch>
            <Route
              path={`${AppRoute.salesDetails}/dashboard`}
              render={() => (
                <DashboardContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${AppRoute.salesDetails}/general`}
              render={() => <GeneralContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
            />
            <Route
              path={`${AppRoute.salesDetails}/client`}
              render={() => <ClientContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
            />
            <Route
              path={`${AppRoute.salesDetails}/contracts`}
              render={() => (
                <ContractsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${AppRoute.salesDetails}/brokerage`}
              render={() => (
                <BrokerageContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${AppRoute.salesDetails}/costs`}
              render={() => <CostsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
            />
            <Route
              path={`${AppRoute.salesDetails}/dates`}
              render={() => <DatesContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
            />
            <Redirect to={{ pathname: `${AppRoute.salesDetails}/dashboard` }} />
          </Switch>
        </Box>
      </Grid>
    </Grid>
  );
};
