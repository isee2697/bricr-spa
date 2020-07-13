import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid, NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { PimType } from 'app/shared/pimType';

import { ProjectDetailsSidebarMenu } from './projectDetailsSidebarMenu/ProjectDetailsSidebarMenu';
import { Dashboard } from './sections/dashboard/Dashboard';
import { GeneralContainer } from './sections/general/GeneralContainer';
import { ServicesContainer } from './sections/services/ServicesContainer';
import { Prices } from './sections/prices/Prices';
import { CharacteristicsContainer } from './sections/characteristics/CharacteristicsContainer';
import { ObjectTypes } from './sections/objectTypes/ObjectTypes';

export const ProjectDetails = () => {
  const { formatMessage } = useLocale();

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
              <Route path={`${AppRoute.projectDetails}/general`} render={() => <GeneralContainer />} />
              <Route path={`${AppRoute.projectDetails}/services`} render={() => <ServicesContainer />} />
              <Route path={`${AppRoute.projectDetails}/characteristics`} render={() => <CharacteristicsContainer />} />
              <Route path={`${AppRoute.projectDetails}/prices`} render={() => <Prices />} />
              <Route
                path={`${AppRoute.projectDetails}/media`}
                render={() => <MediaContainer isSidebarVisible onOpenSidebar={() => {}} pimType={PimType.Project} />}
              />
              <Route path={`${AppRoute.projectDetails}/objectTypes`} render={() => <ObjectTypes />} />
              <Redirect to={{ pathname: `${AppRoute.projectDetails}/dashboard` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
