import React, { useState, useCallback } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { Grid, Alert, Loader, NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { MediaContainer } from 'app/shared/media/MediaContainer';
import { EntityType, EntityTypeProvider } from 'app/shared/entityType';

import { useStyles } from './PimDetails.styles';
import { PimDetailsSidebarMenu } from './pimDetailsSidebarMenu/PimDetailsSidebarMenu';
import { PimDetailsProps } from './PimDetails.types';
import { General } from './sections/general/General';
import { Inside } from './sections/inside/Inside';
import { Outside } from './sections/outside/Outside';
import { CadastreContainer } from './sections/cadastre/CadastreContainer';
import { PricesContainer } from './sections/prices/PricesContainer';
import { ServicesContainer } from './sections/services/ServicesContainer';
import { Specification } from './sections/specification/Specification';

export const PimDetails = ({ loading, error, data }: PimDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { state } = useLocation<{ newlyAdded: boolean }>();

  const pim = data?.getPimGeneral;
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
    <EntityTypeProvider entityType={EntityType.Property}>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.pim' })} to={AppRoute.pim} />
      <NavBreadcrumb title={title} urlBase={AppRoute.pimDetails} />
      <Grid container spacing={0}>
        {isSidebarVisible && (
          <Grid item xs={12} md={3} lg={2}>
            <PimDetailsSidebarMenu data={data} onHide={handleSidebarHide} />
          </Grid>
        )}
        <Grid item xs={12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12}>
          <Grid container className={classes.content}>
            {!!error && (
              <Grid item xs={12}>
                <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
              </Grid>
            )}
            {!error && !!pim && (
              <Switch>
                <Route
                  path={`${AppRoute.pimDetails}/general`}
                  render={() => (
                    <General isSidebarVisible={isSidebarVisible} onOpenSidebar={handleSidebarOpen} title={title} />
                  )}
                />
                <Route
                  path={`${AppRoute.pimDetails}/inside`}
                  render={() => (
                    <Inside isSidebarVisible={isSidebarVisible} onOpenSidebar={handleSidebarOpen} title={title} />
                  )}
                />
                <Route
                  path={`${AppRoute.pimDetails}/outside`}
                  render={() => (
                    <Outside isSidebarVisible={isSidebarVisible} onOpenSidebar={handleSidebarOpen} title={title} />
                  )}
                />
                <Route
                  path={`${AppRoute.pimDetails}/cadastre`}
                  render={() => (
                    <CadastreContainer
                      isSidebarVisible={isSidebarVisible}
                      onOpenSidebar={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${AppRoute.pimDetails}/services`}
                  render={() => (
                    <ServicesContainer
                      isSidebarVisible={isSidebarVisible}
                      onOpenSidebar={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${AppRoute.pimDetails}/prices`}
                  render={() => (
                    <PricesContainer
                      isSidebarVisible={isSidebarVisible}
                      onOpenSidebar={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${AppRoute.pimDetails}/specification`}
                  render={() => (
                    <Specification
                      isSidebarVisible={isSidebarVisible}
                      onOpenSidebar={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Route
                  path={`${AppRoute.pimDetails}/media`}
                  render={() => (
                    <MediaContainer
                      isSidebarVisible={isSidebarVisible}
                      onOpenSidebar={handleSidebarOpen}
                      title={title}
                    />
                  )}
                />
                <Redirect to={{ pathname: `${AppRoute.pimDetails}/general`, state }} />
              </Switch>
            )}
          </Grid>
        </Grid>
      </Grid>
    </EntityTypeProvider>
  );
};
