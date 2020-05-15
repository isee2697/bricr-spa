import React, { useState, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Alert } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './PimDetails.styles';
import { PimDetailsSidebarMenu } from './pimDetailsSidebarMenu/PimDetailsSidebarMenu';
import { PimDetailsProps } from './PimDetails.types';
import { General } from './sections/general/General';
import { Inside } from './sections/inside/Inside';

export const PimDetails = ({ error: isError, data }: PimDetailsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisiblity] = useState(true);
  const { formatMessage } = useLocale();
  const pim = data?.getPim;
  const title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city} ${pim.country}` : '';

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
          <PimDetailsSidebarMenu onHide={handleSidebarHide} />
        </Grid>
      )}
      <Grid item xs={12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12}>
        <Grid container spacing={3} className={classes.content}>
          {!!isError && (
            <Grid item xs={12}>
              <Alert severity="error">{formatMessage({ id: AppMessages['common.error'] })}</Alert>
            </Grid>
          )}
          <Switch>
            <Route
              path={`${AppRoute.pimDetails}/general`}
              exact
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
            <Redirect to={`${AppRoute.pimDetails}/general`} />
          </Switch>
        </Grid>
      </Grid>
    </Grid>
  );
};
