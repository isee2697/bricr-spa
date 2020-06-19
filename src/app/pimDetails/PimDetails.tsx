import React, { useState, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Pim, PimServices } from 'api/types';
import { Grid, Alert, LastUpdated } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { PricesContainer } from 'app/pimDetails/sections/prices/PricesContainer';
import { MediaContainer } from 'app/pimDetails/sections/media/MediaContainer';
import { General } from 'app/pimDetails/sections/general/General';

import { useStyles } from './PimDetails.styles';
import { PimDetailsSidebarMenu } from './pimDetailsSidebarMenu/PimDetailsSidebarMenu';
import { PimDetailsProps } from './PimDetails.types';
import { Inside } from './sections/inside/Inside';
import { Outside } from './sections/outside/Outside';
import { Cadastre } from './sections/cadastre/Cadastre';
import { ServicesContainer } from './sections/services/ServicesContainer';
import { Specification } from './sections/specification/Specification';

export const PimDetails = ({ error: isError, data, servicesData, cadastreData, outsideData }: PimDetailsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisiblity] = useState(true);
  const { formatMessage } = useLocale();
  const pim = data?.getPim as Pim;
  const title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city}` : '';

  const handleSidebarHide = useCallback(() => {
    setSidebarVisiblity(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisiblity(true);
  }, []);

  return (
    <Grid container spacing={0}>
      {isSidebarVisible && (
        <Grid item xs={12} md={3} lg={2}>
          <PimDetailsSidebarMenu
            pim={pim}
            services={servicesData?.getPimServices as PimServices}
            cadastre={cadastreData?.getPimCadastre}
            onHide={handleSidebarHide}
          />
        </Grid>
      )}
      <Grid item xs={12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12}>
        <Grid container spacing={3} className={classes.content}>
          {!!isError && (
            <Grid item xs={12}>
              <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
            </Grid>
          )}
          {!isError && !!pim && (
            <Switch>
              <Route
                path={`${AppRoute.pimDetails}/general`}
                render={() => (
                  <General
                    isSidebarVisible={isSidebarVisible}
                    onOpenSidebar={handleSidebarOpen}
                    title={title}
                    pim={pim}
                  />
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
                  <Outside
                    pim={pim}
                    isSidebarVisible={isSidebarVisible}
                    onOpenSidebar={handleSidebarOpen}
                    title={title}
                  />
                )}
              />
              <Route
                path={`${AppRoute.pimDetails}/cadastre`}
                render={() => (
                  <Cadastre
                    isSidebarVisible={isSidebarVisible}
                    onOpenSidebar={handleSidebarOpen}
                    title={title}
                    pim={pim}
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
                    pim={pim}
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
                    pim={pim}
                  />
                )}
              />
              <Route
                path={`${AppRoute.pimDetails}/specification`}
                render={() => (
                  <Specification isSidebarVisible={isSidebarVisible} onOpenSidebar={handleSidebarOpen} title={title} />
                )}
              />
              <Route
                path={`${AppRoute.pimDetails}/media`}
                render={() => (
                  <MediaContainer isSidebarVisible={isSidebarVisible} onOpenSidebar={handleSidebarOpen} title={title} />
                )}
              />
              <Redirect to={`${AppRoute.pimDetails}/general`} />
            </Switch>
          )}
        </Grid>
        <LastUpdated
          dateUpdated={!!pim ? pim.dateUpdated : null}
          updatedBy={!!pim ? pim.lastEditedBy : null}
          className={classes.lastUpdated}
          withIcon
        />
      </Grid>
    </Grid>
  );
};
