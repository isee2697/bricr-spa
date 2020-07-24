import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { CostsContainer } from 'app/shared/prices';
import { PricesGeneralContainer } from 'app/shared/prices';

import { InterestsContainer } from './interests/InterestsContainer';

export const Prices = () => (
  <Switch>
    <Route default path={`${AppRoute.projectDetails}/prices`} exact render={() => <PricesGeneralContainer />} />
    <Route default path={`${AppRoute.projectDetails}/prices/costs`} exact render={() => <CostsContainer />} />
    <Route default path={`${AppRoute.projectDetails}/prices/interests`} exact render={() => <InterestsContainer />} />
    <Redirect to={`${AppRoute.projectDetails}/prices`} />
  </Switch>
);
