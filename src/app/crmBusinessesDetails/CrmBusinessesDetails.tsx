import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { EntityTypeProvider } from 'app/shared/entityType';
import { Grid, Box } from 'ui/atoms';

import { CrmBusinessesDetailsProps } from './CrmBusinessesDetails.types';
import { useStyles } from './CrmBusinessesDetails.styles';
import { CrmBusinessDetailsSidebarMenu } from './sidebarMenu/SidebarMenu';
import { CrmBusinessDetailsDashboard } from './dashboard/Dashboard';

export const CrmBusinessesDetails = ({ crm, breadcrumbs, path, entityType }: CrmBusinessesDetailsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <EntityTypeProvider entityType={entityType}>
      <Grid container spacing={0} wrap="nowrap">
        {breadcrumbs}
        <CrmBusinessDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
        <Box flex={1}>
          <Grid container className={classes.content}>
            {!!crm && (
              <Switch>
                <Route
                  path={`${path}/dashboard`}
                  render={() => (
                    <CrmBusinessDetailsDashboard
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                      crm={crm}
                    />
                  )}
                />
                <Redirect to={`${path}/dashboard`} />
              </Switch>
            )}
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
