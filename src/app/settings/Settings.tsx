import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, Grid } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';

import { SettingsSidebarMenu } from './settingsSidebarMenu/SettingsSidebarMenu';

export const Settings = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  return (
    <>
      <Grid container spacing={0}>
        {isSidebarVisible && (
          <Grid item xs={12} md={3} lg={2}>
            <SettingsSidebarMenu onHide={handleSidebarHide} />
          </Grid>
        )}
        <Grid item xs={12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12}>
          <Box padding={3}>
            <Switch>
              <Route path={`${AppRoute.settings}/workflowTemplates`} render={() => 'Workflow templates'} />
              <Redirect to={{ pathname: `${AppRoute.settings}/workflowTemplates` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
