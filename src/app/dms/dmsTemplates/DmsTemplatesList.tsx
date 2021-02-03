import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { DmsTemplatesContainer } from './DmsTemplatesContainer';

export const DmsTemplatesList = () => {
  return (
    <Switch>
      <Route
        path={`${AppRoute.dms}/templates/:type/bricr`}
        render={() => <DmsTemplatesContainer category={'bricr'} />}
      />
      <Route
        path={`${AppRoute.dms}/templates/:type/custom`}
        render={() => <DmsTemplatesContainer category={'custom'} />}
      />
      <Redirect to={`${AppRoute.dms}/templates/:type/bricr`} />
    </Switch>
  );
};
