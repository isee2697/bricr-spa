import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { PricesGeneralContainer } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneralContainer';
import { PricesProps } from 'app/pimDetails/sections/prices/Prices.types';
import { InvestmentsContainer } from 'app/pimDetails/sections/prices/investments/InvestmentsContainer';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';

import { CostsContainer } from './costs/CostsContainer';

export const Prices = ({ pricing, ...props }: PricesProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();

  return (
    <>
      <NavBreadcrumb urlBase={baseUrl} to="/prices" title={formatMessage({ id: 'pim_details.prices.title' })} />
      <Switch>
        <Route
          default
          path={`${baseUrl}/prices`}
          exact
          render={() => (
            <PricesGeneralContainer
              {...props}
              rent={pricing.pricing?.rent ?? undefined}
              sale={pricing.pricing?.sale ?? undefined}
              dateUpdated={pricing.pricing?.dateUpdated}
              updatedBy={pricing.pricing?.lastEditedBy}
              description={pricing.pricing?.description ?? ''}
            />
          )}
        />
        <Route
          path={`${baseUrl}/prices/costs`}
          exact
          render={() => (
            <CostsContainer
              {...props}
              costs={pricing.costs ?? []}
              dateUpdated={pricing.dateUpdated}
              updatedBy={pricing.lastEditedBy}
              description={pricing.costsDescription ?? ''}
            />
          )}
        />
        <Route
          path={`${baseUrl}/prices/investments`}
          exact
          render={() => <InvestmentsContainer {...props} investment={pricing.investment ?? null} />}
        />
        <Redirect to={`${baseUrl}/prices`} />
      </Switch>
    </>
  );
};
