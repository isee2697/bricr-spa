import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { CostsContainer } from 'app/shared/prices';
import { PricesGeneralContainer } from 'app/shared/prices';
import { AppRoute } from 'routing/AppRoute.enum';
import { ObjectTypeDetailsProps } from 'app/objectTypeDetails/ObjectTypeDetails.types';

export const Prices = ({ isSidebarVisible, onSidebarOpen }: ObjectTypeDetailsProps) => {
  return (
    <Switch>
      <Route
        default
        path={`${AppRoute.objectTypeDetails}/prices/costs`}
        exact
        render={() => <CostsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />}
      />
      <Route
        default
        path={`${AppRoute.objectTypeDetails}/prices`}
        exact
        render={() => <PricesGeneralContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />}
      />
      <Redirect to={`${AppRoute.objectTypeDetails}/prices`} />
    </Switch>
  );
};
