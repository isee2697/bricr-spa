import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { useLayout } from 'context/layout';

import { SettingsSidebarMenu } from './settingsSidebarMenu/SettingsSidebarMenu';
import { WorkflowTemplatesContainer } from './sections/workflowTemplates/WorkflowTemplatesContainer';
import { WorkflowContainer } from './sections/workflow/WorkflowContainer';

export const Settings = () => {
  const { formatMessage } = useLocale();
  const { isSidebarMenuVisible, isHeaderVisible, isSidebarVisible } = useLayout();

  const isFullScreen = !isSidebarMenuVisible && !isHeaderVisible && !isSidebarVisible;

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'settings.title' })} urlBase={AppRoute.settings} />
      <Grid container spacing={0}>
        {isSidebarMenuVisible && (
          <Grid item xs={12} md={3} lg={2}>
            <SettingsSidebarMenu />
          </Grid>
        )}
        <Grid item xs={12} md={isSidebarMenuVisible ? 9 : 12} lg={isSidebarMenuVisible ? 10 : 12}>
          <Box padding={isFullScreen ? 0 : 3}>
            <Switch>
              <Route path={`${AppRoute.settings}/workflowTemplates`} render={() => <WorkflowTemplatesContainer />} />
              <Route path={AppRoute.workflow} render={() => <WorkflowContainer />} />
              <Redirect to={{ pathname: `${AppRoute.settings}/workflowTemplates` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
