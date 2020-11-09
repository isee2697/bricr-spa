import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { EntityTypeProvider } from 'app/shared/entityType';
import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';

import { SalesProps } from './Sales.types';
import { SalesSidebarMenu } from './salesSidebarMenu/SalesSidebarMenu';
import { useStyles } from './Sales.styles';
import { SalesDashboard } from './salesDashboard/SalesDashboard';
import { SalesLeadsContainer } from './salesLeads/SalesLeadsContainer';
import { SalesAcquisitionContainer } from './salesAcquisition/SalesAcquisitionContainer';

export const Sales = ({ path, entityType }: SalesProps) => {
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const classes = useStyles();

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <EntityTypeProvider entityType={entityType}>
      <Grid container spacing={0} wrap="nowrap">
        <NavBreadcrumb title={formatMessage({ id: 'header.links.sales' })} to={AppRoute.sales} />
        <SalesSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
        <Box flex={1}>
          <Grid container className={classes.content}>
            <Switch>
              <Route
                path={`${path}/dashboard`}
                render={() => <SalesDashboard onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />}
              />
              <Route
                path={`${path}/leads`}
                render={() => (
                  <SalesLeadsContainer onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
                )}
              />
              <Route
                path={`${path}/acquisition`}
                render={() => (
                  <SalesAcquisitionContainer onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
                )}
              />
              <Redirect to={{ pathname: `${path}/dashboard` }} />
            </Switch>
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
