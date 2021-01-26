import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Alert, Box, Grid, Loader } from 'ui/atoms';
import { useLocale } from 'hooks';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { General } from 'app/pimDetails/sections/general/General';
import { Inside } from 'app/pimDetails/sections/inside/Inside';
import { Outside } from 'app/pimDetails/sections/outside/Outside';
import { CadastreContainer } from 'app/pimDetails/sections/cadastre/CadastreContainer';
import { PricesContainer } from 'app/pimDetails/sections/prices/PricesContainer';
import { ServicesContainer } from 'app/pimDetails/sections/services/ServicesContainer';
import { MetersContainer } from 'app/pimDetails/sections/meters/MetersContainer';
import { Specification } from 'app/pimDetails/sections/specification/Specification';
import { EntityTypeProvider } from 'app/shared/entityType';
import { PimDetailsSidebarMenu } from 'app/shared/pimDetailsSidebarMenu/PimDetailsSidebarMenu';
import { AogSpaceType, TiaraEntities } from 'api/types';
import { TiaraContainer } from 'app/shared/tiara/TiaraContainer';

import { AllocateResultsDetailsContainer } from './sections/allocateResultsDetails/AllocateResultsDetailsContainer';
import { AllocateResultsContainer } from './sections/allocateResults/AllocateResultsContainer';
import { PimDetailsProps } from './PimDetails.types';
import { useStyles } from './PimDetails.styles';
import { CommercialSpacesContainer } from './sections/commercial/CommercialSpacesContainer';
import { AogSpacesContainer } from './sections/aogSpaces/AogSpacesContainer';
import { SalesSettingsContainer } from './sections/salesSettings/SalesSettingsContainer';
import { SummaryContainer } from './sections/summary/SummaryContainer';
import { DocumentsContainer } from './sections/documents/DocumentsContainer';
import { DashboardContainer } from './sections/dashboard/DashboardContainer';
import { PublicationContainer } from './sections/publication/PublicationContainer';

export const PimDetails = ({
  loading,
  error,
  data,
  breadcrumbs,
  path,
  entityType,
  objectTypeName,
}: PimDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { state } = useLocation<{ newlyAdded: boolean }>();

  const pim = data?.getPimGeneral;
  const mainPicture =
    data?.getPimMedia?.mainPictureId &&
    data?.getPimMedia.pictures?.find(({ id }) => id === data.getPimMedia.mainPictureId);
  const title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city}` : '';

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
    <EntityTypeProvider entityType={entityType}>
      {breadcrumbs}
      <Grid container spacing={0}>
        <PimDetailsSidebarMenu
          isVisible={isSidebarVisible}
          data={data}
          onHide={handleSidebarHide}
          objectTypeName={objectTypeName}
          allocateResultsNumber={5}
          picture={mainPicture || undefined}
        />
        <Box flex={1}>
          <Grid container className={classes.content}>
            {!!error && (
              <Grid item xs={12}>
                <Alert data-testid="pim-details-error" severity="error">
                  {formatMessage({ id: 'common.error' })}
                </Alert>
              </Grid>
            )}
            {!error && !!pim && (
              <Switch>
                <Route
                  path={`${path}/dashboard`}
                  render={() => (
                    <DashboardContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/general`}
                  render={() => (
                    <General isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} title={title} />
                  )}
                />
                <Route
                  path={`${path}/inside`}
                  render={() => (
                    <Inside isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} title={title} />
                  )}
                />
                <Route
                  path={`${path}/outside`}
                  render={() => (
                    <Outside isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} title={title} />
                  )}
                />
                <Route
                  path={`${path}/cadastre`}
                  render={() => (
                    <CadastreContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/services`}
                  render={() => (
                    <ServicesContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/meters`}
                  render={() => (
                    <MetersContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/prices`}
                  render={() => (
                    <PricesContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/allocateSettings`}
                  render={() => (
                    <SalesSettingsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                  )}
                />
                <Route
                  path={`${path}/specification`}
                  render={() => (
                    <Specification
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/media`}
                  render={() => (
                    <MediaContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/commercialspaces`}
                  render={() => (
                    <CommercialSpacesContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/summary`}
                  render={() => (
                    <SummaryContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/tiara`}
                  render={() => (
                    <TiaraContainer
                      entity={TiaraEntities.Pim}
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${path}/documents`}
                  render={() => (
                    <DocumentsContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route exact path={`${path}/propertyJourney`} render={() => <>PropertyJourney</>} />
                <Route exact path={`${path}/timeline`} render={() => <>Timeline</>} />
                <Route
                  exact
                  path={`${path}/allocateResults`}
                  render={() => (
                    <AllocateResultsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                  )}
                />
                <Route
                  path={`${path}/allocateResults/:id`}
                  render={() => (
                    <AllocateResultsDetailsContainer
                      isSidebarVisible={isSidebarVisible}
                      onSidebarOpen={handleSidebarOpen}
                    />
                  )}
                />
                <Route
                  path={`${path}/publication`}
                  render={() => (
                    <PublicationContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={handleSidebarOpen} />
                  )}
                />
                {Object.values(AogSpaceType).map(aogSpaceType => (
                  <Route
                    key={aogSpaceType}
                    path={`${path}/${aogSpaceType.toLowerCase()}`}
                    render={() => (
                      <AogSpacesContainer
                        isSidebarVisible={isSidebarVisible}
                        onSidebarOpen={handleSidebarOpen}
                        title={title}
                        type={aogSpaceType}
                      />
                    )}
                  />
                ))}
                <Redirect to={{ pathname: `${path}/dashboard`, state }} />
              </Switch>
            )}
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
