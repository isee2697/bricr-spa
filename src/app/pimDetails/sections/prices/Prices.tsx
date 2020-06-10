import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { AppRoute } from 'routing/AppRoute.enum';
import { InvestmentsContainer } from 'app/pimDetails/sections/prices/investments/InvestmentsContainer';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { PricesGeneral } from './PricesGeneral';
import { CostsContainer } from './costs/CostsContainer';

export const Prices = (props: PimDetailsSectionProps) => {
  return (
    <>
      <Switch>
        <Route default path={`${AppRoute.pimDetails}/prices`} exact render={() => <PricesGeneral {...props} />} />
        <Route path={`${AppRoute.pimDetails}/prices/costs`} exact render={() => <CostsContainer {...props} />} />
        <Route
          path={`${AppRoute.pimDetails}/prices/investments`}
          exact
          render={() => <InvestmentsContainer {...props} />}
        />
        <Redirect to={`${AppRoute.pimDetails}/prices`} />
      </Switch>
    </>
  );
};
