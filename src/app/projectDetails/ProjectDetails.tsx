import React, { useCallback, useState } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid, NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { EntityType, EntityTypeProvider } from 'app/shared/entityType';
import { ProjectJourneyContainer } from '../shared/projectJourney/ProjectJourneyContainer';
import { ServicesGeneralContainer } from 'app/shared/services/general/ServicesGeneralContainer';
import { useListObjectTypesCountQuery } from 'api/types';

import { ProjectDetailsSidebarMenu } from './projectDetailsSidebarMenu/ProjectDetailsSidebarMenu';
import { Dashboard } from './sections/dashboard/Dashboard';
import { GeneralContainer } from './sections/general/GeneralContainer';
import { CharacteristicsContainer } from './sections/characteristics/CharacteristicsContainer';
import { Prices } from './sections/prices/Prices';
import { ObjectTypesContainer } from './sections/objectTypes/ObjectTypesContainer';
import { NcpProps } from './ProjectDetails.types';

export const ProjectDetails = ({ ncp }: NcpProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const { data } = useListObjectTypesCountQuery({
    variables: { ncpId: id },
  });

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <EntityTypeProvider entityType={EntityType.Project}>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.nc_sale' })} to={AppRoute.project} />
      <NavBreadcrumb title={'TODO: place here a project name'} urlBase={AppRoute.projectDetails} />
      <Grid container spacing={0}>
        {isSidebarVisible && (
          <Grid item xs={12} md={3} lg={2}>
            <ProjectDetailsSidebarMenu
              onHide={handleSidebarHide}
              ncp={ncp}
              objectTypeNumber={data?.activeCount.metadata?.total ?? 0}
            />
          </Grid>
        )}
        <Grid item xs={12} md={9} lg={10}>
          <Box padding={3}>
            <Switch>
              <Route
                path={`${AppRoute.projectDetails}/dashboard`}
                render={() => <Dashboard isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
              />
              <Route
                path={`${AppRoute.projectDetails}/projectJourney`}
                render={() => (
                  <ProjectJourneyContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
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
              <Redirect to={{ pathname: `${AppRoute.projectDetails}/dashboard` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </EntityTypeProvider>
  );
};
