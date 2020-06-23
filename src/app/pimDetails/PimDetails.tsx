import React, { useState, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Alert, Loader } from 'ui/atoms';
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
import { CadastreContainer } from './sections/cadastre/CadastreContainer';
import { ServicesContainer } from './sections/services/ServicesContainer';
import { Specification } from './sections/specification/Specification';

export const PimDetails = ({ loading, error, data }: PimDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisiblity] = useState(true);

  const pim = data?.getPimGeneral;
  const title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city}` : '';

  const handleSidebarHide = useCallback(() => {
    setSidebarVisiblity(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisiblity(true);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid container spacing={0}>
      {isSidebarVisible && (
        <Grid item xs={12} md={3} lg={2}>
          <PimDetailsSidebarMenu data={data} onHide={handleSidebarHide} />
        </Grid>
      )}
      <Grid item xs={12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12}>
        <Grid container spacing={3} className={classes.content}>
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
        {/* <LastUpdated
          dateUpdated={!!pim ? pim.dateUpdated : null}
          updatedBy={!!pim ? pim.lastEditedBy : null}
          className={classes.lastUpdated}
          withIcon
        /> */}
      </Grid>
    </Grid>
  );
};
