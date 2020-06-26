import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { AppRoute } from 'routing/AppRoute.enum';
import { PricesGeneralContainer } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneralContainer';
import { PricesProps } from 'app/pimDetails/sections/prices/Prices.types';
import { InvestmentsContainer } from 'app/pimDetails/sections/prices/investments/InvestmentsContainer';

import { CostsContainer } from './costs/CostsContainer';

export const Prices = ({ pricing, ...props }: PricesProps) => {
  return (
    <>
      <Switch>
        <Route
          default
          path={`${AppRoute.pimDetails}/prices`}
          exact
          render={() => (
            <PricesGeneralContainer
              {...props}
              rent={pricing.pricing?.rent ?? undefined}
              sale={pricing.pricing?.sale ?? undefined}
              dateUpdated={pricing.pricing?.dateUpdated}
              updatedBy={pricing.pricing?.lastEditedBy}
            />
          )}
        />
        <Route
          path={`${AppRoute.pimDetails}/prices/costs`}
          exact
          render={() => (
            <CostsContainer
              {...props}
              costs={pricing.costs ?? []}
              dateUpdated={pricing.dateUpdated}
              updatedBy={pricing.lastEditedBy}
            />
          )}
        />
        <Route
          path={`${AppRoute.pimDetails}/prices/investments`}
          exact
          render={() => <InvestmentsContainer {...props} investment={pricing.investment ?? null} />}
        />
        <Redirect to={`${AppRoute.pimDetails}/prices`} />
      </Switch>
    </>
  );
};
