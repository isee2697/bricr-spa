import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PricesGeneralContainer } from 'app/shared/prices';
import { AppRoute } from 'routing/AppRoute.enum';

export const Prices = () => {
  return (
    <Switch>
      <Route default path={`${AppRoute.objectTypeDetails}/prices`} exact render={() => <PricesGeneralContainer />} />
      <Redirect to={`${AppRoute.objectTypeDetails}/prices`} />
    </Switch>
  );
};
