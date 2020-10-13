import React, { useCallback, useState } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid, NavBreadcrumb, Box, Loader, Alert } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { EntityType, EntityTypeProvider } from 'app/shared/entityType';
import { ProjectJourneyContainer } from '../shared/projectJourney/ProjectJourneyContainer';
import { ServicesGeneralContainer } from 'app/shared/services/general/ServicesGeneralContainer';

import { ProjectDetailsSidebarMenu } from './projectDetailsSidebarMenu/ProjectDetailsSidebarMenu';
import { Dashboard } from './sections/dashboard/Dashboard';
import { GeneralContainer } from './sections/general/GeneralContainer';
import { CharacteristicsContainer } from './sections/characteristics/CharacteristicsContainer';
import { Prices } from './sections/prices/Prices';
import { ObjectTypesContainer } from './sections/objectTypes/ObjectTypesContainer';
import { NcpProps } from './ProjectDetails.types';
import { LinkedPropertiesContainer } from './sections/linkedProperties/LinkedPropertiesContainer';

export const ProjectDetails = ({ data, error, loading }: NcpProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <EntityTypeProvider entityType={EntityType.Project}>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.nc_sale' })} to={AppRoute.project} />
      <NavBreadcrumb title={data?.project.name ?? ''} urlBase={AppRoute.projectDetails} />
      <Grid container spacing={0}>
        <ProjectDetailsSidebarMenu
          onHide={handleSidebarHide}
          isVisible={isSidebarVisible}
          objectTypeNumber={data?.objectTypes.metadata?.total ?? 0}
          title={data?.project.name ?? ''}
          linkedPropertiesNumber={data?.linkedProperties.linkedProperties.metadata?.total ?? 0}
        />
        <Box flex={1} padding={3}>
          {!!error && (
            <Grid item xs={12}>
              <Alert severity="error">
                {formatMessage({ id: 'common.error' }, { message: error?.message?.replace('GraphQL error: ', '') })}
              </Alert>
            </Grid>
          )}
          {!error && !!data?.project && (
            <Switch>
              <Route
                path={`${AppRoute.projectDetails}/dashboard`}
                render={() => <Dashboard isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
              />
              <Route
                path={`${AppRoute.projectDetails}/projectJourney`}
                render={() => (
                  <ProjectJourneyContainer
                    titleId="project_details.project_journey.title"
                    subtitleId="project_details.project_journey.title"
                    isSidebarVisible={isSidebarVisible}
                    onSidebarOpen={handleSidebarOpen}
                  />
                )}
              />
              <Route
                path={`${AppRoute.projectDetails}/general`}
                render={() => (
                  <GeneralContainer key={id} isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                )}
              />
              <Route
                path={`${AppRoute.projectDetails}/characteristics`}
                render={() => (
                  <CharacteristicsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                )}
              />
              <Route
                path={`${AppRoute.projectDetails}/prices`}
                render={() => <Prices isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
              />
              <Route
                path={`${AppRoute.projectDetails}/services`}
                render={() => (
                  <ServicesGeneralContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                )}
              />

              <Route
                path={`${AppRoute.projectDetails}/media`}
                render={() => <MediaContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
              />
              <Route
                path={`${AppRoute.projectDetails}/objectTypes`}
                render={() => (
                  <ObjectTypesContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                )}
              />
              <Route
                path={`${AppRoute.projectDetails}/properties`}
                render={() => (
                  <LinkedPropertiesContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                )}
              />
              <Redirect to={{ pathname: `${AppRoute.projectDetails}/dashboard` }} />
            </Switch>
          )}
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
