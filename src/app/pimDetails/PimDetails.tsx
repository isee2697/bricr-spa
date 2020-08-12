import React, { useState, useCallback } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { Box, Grid, Alert, Loader } from 'ui/atoms';
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

import { PimDetailsProps } from './PimDetails.types';
import { useStyles } from './PimDetails.styles';

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
        />
        <Box flex={1}>
          <Grid container className={classes.content}>
            {!!error && (
              <Grid item xs={12}>
                <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
              </Grid>
            )}
            {!error && !!pim && (
              <Switch>
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
                <Redirect to={{ pathname: `${path}/general`, state }} />
              </Switch>
            )}
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
