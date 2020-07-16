import React from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid, NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { EntityType } from 'app/shared/entityType';

import { ProjectDetailsSidebarMenu } from './projectDetailsSidebarMenu/ProjectDetailsSidebarMenu';
import { Dashboard } from './sections/dashboard/Dashboard';
import { GeneralContainer } from './sections/general/GeneralContainer';
import { ServicesContainer } from './sections/services/ServicesContainer';
import { Prices } from './sections/prices/Prices';
import { CharacteristicsContainer } from './sections/characteristics/CharacteristicsContainer';
import { ObjectTypesContainer } from './sections/objectTypes/ObjectTypesContainer';
import { ProjectJourneyContainer } from './sections/projectJourney/ProjectJourneyContainer';

export const ProjectDetails = () => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.nc_sale' })} to={AppRoute.project} />
      <NavBreadcrumb title={'TODO: place here a project name'} urlBase={AppRoute.projectDetails} />
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <ProjectDetailsSidebarMenu />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Box padding={3}>
            <Switch>
              <Route path={`${AppRoute.projectDetails}/dashboard`} render={() => <Dashboard />} />
              <Route path={`${AppRoute.projectDetails}/general`} render={() => <GeneralContainer key={id} />} />
              <Route path={`${AppRoute.projectDetails}/projectJourney`} render={() => <ProjectJourneyContainer />} />
              <Route path={`${AppRoute.projectDetails}/characteristics`} render={() => <CharacteristicsContainer />} />
              <Route path={`${AppRoute.projectDetails}/prices`} render={() => <Prices />} />
              <Route path={`${AppRoute.projectDetails}/services`} render={() => <ServicesContainer />} />
              <Route
                path={`${AppRoute.projectDetails}/media`}
                render={() => (
                  <MediaContainer isSidebarVisible onOpenSidebar={() => {}} entityType={EntityType.Project} />
                )}
              />
              <Route path={`${AppRoute.projectDetails}/objectTypes`} render={() => <ObjectTypesContainer />} />
              <Redirect to={{ pathname: `${AppRoute.projectDetails}/dashboard` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
