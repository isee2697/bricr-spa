import React, { lazy, useCallback, useState, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Alert, Box, Grid, Loader } from 'ui/atoms';
import { useLocale } from 'hooks';
import { EntityTypeProvider } from 'app/shared/entityType';
import { PimDetailsSidebarMenu } from 'app/shared/pimDetailsSidebarMenu/PimDetailsSidebarMenu';
import { AogSpaceType, TiaraEntities } from 'api/types';

import { PimDetailsProps } from './PimDetails.types';
import { useStyles } from './PimDetails.styles';
import { PublicationDetailsContainer } from './sections/publicationDetails/PublicationDetailsContainer';

const AllocateResultsDetailsContainer = lazy(() =>
  import('./sections/allocateResultsDetails/AllocateResultsDetailsContainer'),
);
const MediaContainer = lazy(() => import('app/shared/media/MediaContainer'));
const General = lazy(() => import('./sections/general/General'));
const Inside = lazy(() => import('./sections/inside/Inside'));
const Outside = lazy(() => import('./sections/outside/Outside'));
const CadastreContainer = lazy(() => import('./sections/cadastre/CadastreContainer'));
const PricesContainer = lazy(() => import('./sections/prices/PricesContainer'));
const ServicesContainer = lazy(() => import('./sections/services/ServicesContainer'));
const MetersContainer = lazy(() => import('./sections/meters/MetersContainer'));
const Specification = lazy(() => import('./sections/specification/Specification'));
const TiaraContainer = lazy(() => import('app/shared/tiara/TiaraContainer'));
const AllocateResultsContainer = lazy(() => import('./sections/allocateResults/AllocateResultsContainer'));
const CommercialSpacesContainer = lazy(() => import('./sections/commercial/CommercialSpacesContainer'));
const AogSpacesContainer = lazy(() => import('./sections/aogSpaces/AogSpacesContainer'));
const SalesSettingsContainer = lazy(() => import('./sections/salesSettings/SalesSettingsContainer'));
const SummaryContainer = lazy(() => import('./sections/summary/SummaryContainer'));
const DocumentsContainer = lazy(() => import('./sections/documents/DocumentsContainer'));
const DashboardContainer = lazy(() => import('./sections/dashboard/DashboardContainer'));
const PublicationContainer = lazy(() => import('./sections/publication/PublicationContainer'));

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
        <Grid item xs={12} md={9} lg={10}>
          <Box width="100%">
            <Grid container className={classes.content}>
              {!!error && (
                <Grid item xs={12}>
                  <Alert data-testid="pim-details-error" severity="error">
                    {formatMessage({ id: 'common.error' })}
                  </Alert>
                </Grid>
              )}
              {!error && !!pim && (
                <Suspense fallback={<Loader />}>
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
                        <AllocateResultsContainer
                          isSidebarVisible={isSidebarVisible}
                          onSidebarOpen={handleSidebarOpen}
                        />
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
                      exact
                      path={`${path}/publication`}
                      render={() => (
                        <PublicationContainer
                          title={title}
                          isSidebarVisible={isSidebarVisible}
                          onSidebarOpen={handleSidebarOpen}
                        />
                      )}
                    />
                    <Route
                      path={`${path}/publication/:publicationId`}
                      render={() => (
                        <PublicationDetailsContainer
                          isSidebarVisible={isSidebarVisible}
                          onSidebarOpen={handleSidebarOpen}
                          title={title}
                        />
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
                </Suspense>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </EntityTypeProvider>
  );
};
