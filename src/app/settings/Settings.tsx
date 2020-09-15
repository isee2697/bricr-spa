import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { useLayout } from 'context/layout';

import { TeamsGeneral } from './sections/teams/TeamsGeneral';
import { TeamContainer } from './sections/teams/TeamContainer';
import { SettingsSidebarMenu } from './settingsSidebarMenu/SettingsSidebarMenu';
import { WorkflowTemplatesContainer } from './sections/workflowTemplates/WorkflowTemplatesContainer';
import { WorkflowContainer } from './sections/workflow/WorkflowContainer';
import { SettingsProps } from './Settings.types';
import { BillingContainer } from './sections/billing/BillingContainer';

export const Settings = ({ data }: SettingsProps) => {
  const { formatMessage } = useLocale();
  const { isSidebarMenuVisible, isHeaderVisible, isSidebarVisible } = useLayout();

  const isFullScreen = !isSidebarMenuVisible && !isHeaderVisible && !isSidebarVisible;

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'settings.title' })} urlBase={AppRoute.settings} />
      <Grid container spacing={0}>
        <SettingsSidebarMenu data={data} />
        <Box flex={1} padding={isFullScreen ? 0 : 3}>
          <Switch>
            <Route path={`${AppRoute.settings}/workflowTemplates`} render={() => <WorkflowTemplatesContainer />} />
            <Route path={AppRoute.workflow} render={() => <WorkflowContainer />} />
            <Route path={`${AppRoute.settings}/billing`} render={() => <BillingContainer />} />
            <Route
              path={`${AppRoute.settings}/createTeam`}
              render={() => (
                <TeamsGeneral hasTeams={!!(data.getTeams && data.getTeams.items && data.getTeams.items.length > 0)} />
              )}
            />
            <Route path={`${AppRoute.teams}`} render={() => <TeamContainer />} />
            <Redirect to={{ pathname: `${AppRoute.settings}/workflowTemplates` }} />
          </Switch>
        </Box>
      </Grid>
    </>
  );
};
