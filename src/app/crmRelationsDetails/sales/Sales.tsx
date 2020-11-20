import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { SalesProps } from './Sales.types';
import { DashboardContainer } from './dashboard/DashboardContainer';

export const Sales = ({ path, ...otherProps }: SalesProps) => {
  return (
    <Switch>
      <Route exact path={path} component={() => <DashboardContainer path={path} {...otherProps} />} />
      <Redirect to={{ pathname: `${path}` }} />
    </Switch>
  );
};
