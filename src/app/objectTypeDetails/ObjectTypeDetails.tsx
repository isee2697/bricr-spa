import React, { useCallback, useState } from 'react';
import { Switch, Redirect, Route, useParams } from 'react-router-dom';
import { useLocale } from 'hooks';
import { Grid, NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { Dashboard } from 'app/objectTypeDetails/sections/dashboard/Dashboard';
import { Prices } from 'app/objectTypeDetails/sections/prices/Prices';
import { EntityType, EntityTypeProvider } from 'app/shared/entityType';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { ProjectJourneyContainer } from 'app/shared/projectJourney/ProjectJourneyContainer';
import { ServicesGeneralContainer } from 'app/shared/services/general/ServicesGeneralContainer';

import { LinkedPropertiesContainer } from './sections/linkedProperties/LinkedPropertiesContainer';
import { CharacteristicsContainer } from './sections/characteristics/CharacteristicsContainer';
import { ObjectTypeDetailsSidebarMenu } from './objectTypeDetailsSidebarMenu/ObjectTypeDetailsSidebarMenu';
import { ObjectTypeDetailsProps } from './ObjectTypeDetails.types';

export const ObjectTypeDetails = ({ data }: ObjectTypeDetailsProps) => {
  const { formatMessage } = useLocale();
  const { id, projectId } = useParams<{ id: string; projectId: string }>();
  const [isSidebarVisible, setSidebarVisiblity] = useState(true);

  const projectUrl = AppRoute.projectDetails.replace(':id', projectId);
  const objectTypeUrl = AppRoute.objectTypeDetails.replace(':id', id).replace(':projectId', projectId);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisiblity(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisiblity(true);
  }, []);

  return (
    <EntityTypeProvider entityType={EntityType.ObjectType}>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.nc_sale' })} to={AppRoute.project} />
      <NavBreadcrumb title={data?.project.name ?? ''} to={projectUrl} />
      <NavBreadcrumb title={data?.objectType.name ?? ''} to={objectTypeUrl} />
      <Grid container spacing={0}>
        <ObjectTypeDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} data={data} />

        <Box flex={1} padding={3}>
          <Switch>
            <Route
              path={`${AppRoute.objectTypeDetails}/dashboard`}
              render={() => <Dashboard isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
            />
            <Route
              path={`${AppRoute.objectTypeDetails}/prices`}
              render={() => <Prices isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={handleSidebarOpen}
            />
            <Route
              path={`${AppRoute.objectTypeDetails}/services`}
              render={() => (
                <ServicesGeneralContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${AppRoute.objectTypeDetails}/media`}
              render={() => <MediaContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
            />
            <Route
              path={`${AppRoute.objectTypeDetails}/objectJourney`}
              render={() => (
                <ProjectJourneyContainer
                  titleId="project_details.object_type.project_journey.title"
                  subtitleId="project_details.object_type.project_journey.subtitle"
                  isSidebarVisible={isSidebarVisible}
                  onSidebarOpen={handleSidebarOpen}
                />
              )}
            />
            <Route
              path={`${AppRoute.objectTypeDetails}/characteristics`}
              render={() => (
                <CharacteristicsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${AppRoute.objectTypeDetails}/properties`}
              render={() => (
                <LinkedPropertiesContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Redirect to={{ pathname: `${AppRoute.objectTypeDetails}/dashboard` }} />
          </Switch>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
