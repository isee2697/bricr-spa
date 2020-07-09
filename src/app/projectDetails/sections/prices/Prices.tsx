import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { PricesGeneralContainer } from './pricesGeneral/PricesGeneralContainer';

export const Prices = () => (
  <Switch>
    <Route default path={`${AppRoute.projectDetails}/prices`} exact render={() => <PricesGeneralContainer />} />
    <Redirect to={`${AppRoute.projectDetails}/prices`} />
  </Switch>
);
