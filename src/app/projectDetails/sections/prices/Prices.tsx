import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { PricesGeneralContainer } from './pricesGeneral/PricesGeneralContainer';
import { CostsContainer } from './costs/CostsContainer';

export const Prices = () => (
  <Switch>
    <Route default path={`${AppRoute.projectDetails}/prices`} exact render={() => <PricesGeneralContainer />} />
    <Route default path={`${AppRoute.projectDetails}/prices/costs`} exact render={() => <CostsContainer />} />
    <Redirect to={`${AppRoute.projectDetails}/prices`} />
  </Switch>
);
