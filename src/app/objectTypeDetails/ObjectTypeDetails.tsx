import React from 'react';
import { Switch, Redirect, Route, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid, NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { Dashboard } from 'app/objectTypeDetails/sections/dashboard/Dashboard';
import { Prices } from 'app/objectTypeDetails/sections/prices/Prices';
import { EntityType, EntityTypeProvider } from 'app/shared/entityType';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { ProjectJourneyContainer } from 'app/shared/projectJourney/ProjectJourneyContainer';

import { ObjectTypeDetailsSidebarMenu } from './objectTypeDetailsSidebarMenu/ObjectTypeDetailsSidebarMenu';

export const ObjectTypeDetails = () => {
  const { formatMessage } = useLocale();
  const { id, projectId } = useParams<{ id: string; projectId: string }>();

  const projectUrl = AppRoute.projectDetails.replace(':id', projectId);
  const objectTypeUrl = AppRoute.objectTypeDetails.replace(':id', id).replace(':projectId', projectId);

  return (
    <EntityTypeProvider entityType={EntityType.ObjectType}>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.nc_sale' })} to={AppRoute.project} />
      <NavBreadcrumb title={'TODO: place here a project name'} to={projectUrl} />
      <NavBreadcrumb title={'TODO: place here a object type name'} to={objectTypeUrl} />
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <ObjectTypeDetailsSidebarMenu />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Box padding={3}>
            <Switch>
              <Route path={`${AppRoute.objectTypeDetails}/dashboard`} render={() => <Dashboard />} />
              <Route path={`${AppRoute.objectTypeDetails}/prices`} render={() => <Prices />} />
              <Route
                path={`${AppRoute.objectTypeDetails}/media`}
                render={() => <MediaContainer isSidebarVisible onOpenSidebar={() => {}} />}
              />
              <Route path={`${AppRoute.objectTypeDetails}/projectJourney`} render={() => <ProjectJourneyContainer />} />
              <Redirect to={{ pathname: `${AppRoute.objectTypeDetails}/dashboard` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </EntityTypeProvider>
  );
};
