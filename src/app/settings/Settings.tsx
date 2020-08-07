import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';

import { SettingsSidebarMenu } from './settingsSidebarMenu/SettingsSidebarMenu';
import { WorkflowTemplatesContainer } from './sections/workflowTemplates/WorkflowTemplatesContainer';

export const Settings = () => {
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
      <NavBreadcrumb title={formatMessage({ id: 'settings.title' })} urlBase={AppRoute.settings} />
      <Grid container spacing={0}>
        {isSidebarVisible && (
          <Grid item xs={12} md={3} lg={2}>
            <SettingsSidebarMenu onHide={handleSidebarHide} />
          </Grid>
        )}
        <Grid item xs={12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12}>
          <Box padding={3}>
            <Switch>
              <Route
                path={`${AppRoute.settings}/workflowTemplates`}
                render={() => (
                  <WorkflowTemplatesContainer onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
                )}
              />
              <Redirect to={{ pathname: `${AppRoute.settings}/workflowTemplates` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
