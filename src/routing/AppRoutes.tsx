import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from 'app/home/Home';
import { LoginContainer } from 'app/login/LoginContainer';
import { LogoutContainer } from 'app/logout/LogoutContainer';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={Home} />
      <Route path={AppRoute.pim} exact component={Home} />
      <Route path={AppRoute.crm} exact component={Home} />
      <Route path={AppRoute.sales} exact component={Home} />
      <Route path={AppRoute.login} component={LoginContainer} />
      <Route path={AppRoute.logout} component={LogoutContainer} />
      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
