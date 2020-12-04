import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { useLayout } from 'context/layout';
import { UsersRouter } from 'app/settings/sections/users/UsersRouter';

import { TeamsGeneral } from './sections/teams/TeamsGeneral';
import { TeamContainer } from './sections/teams/TeamContainer';
import { WorkflowTemplatesContainer } from './sections/workflowTemplates/WorkflowTemplatesContainer';
import { WorkflowContainer } from './sections/workflow/WorkflowContainer';
import { SettingsProps } from './Settings.types';
import { BillingContainer } from './sections/billing/BillingContainer';
import { LvzPropertyContainer } from './sections/documents/lvzProperty/LvzPropertyContainer';
import { QuestionnaireContainer } from './sections/documents/questionnaireProperty/QuestionnaireContainer';
import { ContractTemplatesContainer } from './sections/documents/contractTemplates/ContractTemplatesContainer';
import { DashboardContainer } from './sections/dashboard/DashboardContainer';
import { ContractTemplatesDetailsContainer } from './sections/documents/contractTemplatesDetails/ContractTemplatesDetailsContainer';
import { SettingsSidebarMenu } from './settingsSidebarMenu/SettingsSidebarMenu';
import { CadastreSettingsContainer } from './sections/cadastre/CadastreSettingsContainer';

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
            <Route path={`${AppRoute.settings}/billing`} render={() => <BillingContainer />} />
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
            <Route exact path={`${AppRoute.settings}/lvzProperty`} render={() => <LvzPropertyContainer />} />
            <Route
              exact
              path={`${AppRoute.settings}/questionnaireProperty`}
              render={() => <QuestionnaireContainer />}
            />
            <Route
              exact
              path={`${AppRoute.settings}/contractTemplates`}
              render={() => <ContractTemplatesContainer />}
            />
            <Route exact path={AppRoute.contractTemplates} render={() => <ContractTemplatesDetailsContainer />} />
            <Route exact path={AppRoute.teams} render={() => <TeamContainer />} />
            <Route path={AppRoute.users} render={() => <UsersRouter />} />
            <Route exact path={AppRoute.settings} render={() => <DashboardContainer />} />
            <Route exact path={AppRoute.cadastre} render={() => <CadastreSettingsContainer />} />
            <Redirect to={{ pathname: `${AppRoute.settings}` }} />
          </Switch>
        </Box>
      </Grid>
    </>
  );
};
