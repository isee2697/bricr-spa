import React, { useCallback, useState } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid, NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { EntityType, EntityTypeProvider } from 'app/shared/entityType';
import { ProjectJourneyContainer } from '../shared/projectJourney/ProjectJourneyContainer';
import { ServicesGeneralContainer } from 'app/shared/services/general/ServicesGeneralContainer';
import { SalesSettingsContainer } from 'app/pimDetails/sections/salesSettings/SalesSettingsContainer';
import { TiaraContainer } from 'app/shared/tiara/TiaraContainer';
import { TiaraEntities } from 'api/types';

import { ProjectDetailsSidebarMenu } from './projectDetailsSidebarMenu/ProjectDetailsSidebarMenu';
import { Dashboard } from './sections/dashboard/Dashboard';
import { GeneralContainer } from './sections/general/GeneralContainer';
import { CharacteristicsContainer } from './sections/characteristics/CharacteristicsContainer';
import { Prices } from './sections/prices/Prices';
import { ObjectTypesContainer } from './sections/objectTypes/ObjectTypesContainer';
import { NcpProps } from './ProjectDetails.types';
import { LinkedPropertiesContainer } from './sections/linkedProperties/LinkedPropertiesContainer';
import { SummaryContainer } from './sections/summary/SummaryContainer';
import { AllocateResultsContainer } from './sections/allocateResults/AllocateResultsContainer';
import { AllocateResultsDetailsContainer } from './sections/allocateResultsDetails/AllocateResultsDetailsContainer';
import { AllocateResultsDetailItemContainer } from './sections/allocateResultsDetailsItem/AllocateResultsDetailItemContainer';

export const ProjectDetails = ({ data }: NcpProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <EntityTypeProvider entityType={EntityType.Project}>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.nc_sale' })} to={AppRoute.project} />
      <NavBreadcrumb title={data?.project.name ?? ''} urlBase={AppRoute.projectDetails} />
      <Grid container spacing={0} wrap="nowrap">
        <ProjectDetailsSidebarMenu
          onHide={handleSidebarHide}
          isVisible={isSidebarVisible}
          objectTypeNumber={data?.objectTypes.metadata?.total ?? 0}
          allocateResultsNumber={0}
          title={data?.project.name ?? ''}
          linkedPropertiesNumber={data?.linkedProperties.linkedProperties.metadata?.total ?? 0}
        />
        <Box flex={1} padding={3}>
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
            <Route
              path={`${AppRoute.projectDetails}/summary`}
              render={() => <SummaryContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />}
            />
            <Route
              path={`${AppRoute.projectDetails}/salesSettings`}
              render={() => (
                <SalesSettingsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${AppRoute.projectDetails}/allocateResults`}
              exact
              render={() => (
                <AllocateResultsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${AppRoute.projectDetails}/allocateResults/:resultId/:resultDetailId`}
              render={() => (
                <AllocateResultsDetailItemContainer
                  isSidebarVisible={isSidebarVisible}
                  onSidebarOpen={handleSidebarOpen}
                />
              )}
            />
            <Route
              path={`${AppRoute.projectDetails}/allocateResults/:resultId`}
              render={() => (
                <AllocateResultsDetailsContainer
                  isSidebarVisible={isSidebarVisible}
                  onSidebarOpen={handleSidebarOpen}
                />
              )}
            />
            <Route
              path={`${AppRoute.projectDetails}/allocateSettings`}
              render={() => (
                <SalesSettingsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
              )}
            />
            <Route
              path={`${AppRoute.projectDetails}/tiara`}
              render={() => (
                <TiaraContainer
                  entity={TiaraEntities.Ncp}
                  isSidebarVisible={isSidebarVisible}
                  onSidebarOpen={handleSidebarOpen}
                />
              )}
            />
            <Redirect to={{ pathname: `${AppRoute.projectDetails}/dashboard` }} />
          </Switch>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
