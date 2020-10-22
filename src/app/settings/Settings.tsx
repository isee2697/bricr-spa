import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { useGetBillingQuery } from 'api/types';
import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { useLayout } from 'context/layout';
import { UsersRouter } from 'app/settings/sections/users/UsersRouter';

import { TeamsGeneral } from './sections/teams/TeamsGeneral';
import { TeamContainer } from './sections/teams/TeamContainer';
import { SettingsSidebarMenu } from './settingsSidebarMenu/SettingsSidebarMenu';
import { WorkflowTemplatesContainer } from './sections/workflowTemplates/WorkflowTemplatesContainer';
import { WorkflowContainer } from './sections/workflow/WorkflowContainer';
import { SettingsProps } from './Settings.types';
import { BillingContainer } from './sections/billing/BillingContainer';

export const Settings = ({ data }: SettingsProps) => {
  const { formatMessage } = useLocale();
  const { data: billingData, refetch } = useGetBillingQuery();
  const { isSidebarMenuVisible, isHeaderVisible, isSidebarVisible } = useLayout();
  const history = useHistory();

  const isFullScreen = !isSidebarMenuVisible && !isHeaderVisible && !isSidebarVisible;

  const unlisten = history.listen(location => {
    if (location.pathname === AppRoute.settings + '/billing') {
      refetch();
    }
  });

  useEffect(() => {
    return () => unlisten();
  });

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'settings.title' })} urlBase={AppRoute.settings} />
      <Grid container spacing={0}>
        <SettingsSidebarMenu data={data} />
        <Box flex={1} padding={isFullScreen ? 0 : 3}>
          <Switch>
            <Route
              path={`${AppRoute.settings}/billing`}
              render={() => <BillingContainer billingUrl={billingData?.getBilling?.url || ''} />}
            />
            <Route
              exact
              path={[
                `${AppRoute.settings}/workflow_templates`,
                `${AppRoute.settings}/workflow_templates/:templateType`,
              ]}
              render={path => <WorkflowTemplatesContainer templateType={path.match.params.templateType} />}
            />
            <Route exact path={AppRoute.workflow} render={() => <WorkflowContainer />} />
            <Route
              exact
              path={`${AppRoute.settings}/createTeam`}
              render={() => (
                <TeamsGeneral hasTeams={!!(data.getTeams && data.getTeams.items && data.getTeams.items.length > 0)} />
              )}
            />
            <Route exact path={AppRoute.teams} render={() => <TeamContainer />} />
            <Route path={AppRoute.users} render={() => <UsersRouter />} />
            <Route exact path={AppRoute.settings} render={() => <>Dashboard</>} />
            <Redirect to={{ pathname: `${AppRoute.settings}` }} />
          </Switch>
        </Box>
      </Grid>
    </>
  );
};
