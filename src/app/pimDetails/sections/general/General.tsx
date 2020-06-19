import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { GeneralMainContainer } from 'app/pimDetails/sections/general/generalMain/GeneralMainContainer';
import { LocationContainer } from 'app/pimDetails/sections/general/location/LocationContainer';

export const General = (props: PimDetailsSectionProps) => (
  <Switch>
    <Route default path={`${AppRoute.pimDetails}/general`} exact render={() => <GeneralMainContainer {...props} />} />
    <Route path={`${AppRoute.pimDetails}/general/location`} exact render={() => <LocationContainer {...props} />} />
    <Redirect to={`${AppRoute.pimDetails}/general`} />
  </Switch>
);
