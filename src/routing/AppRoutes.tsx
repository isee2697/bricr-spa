import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from 'app/home/Home';
import { LoginContainer } from 'app/login/LoginContainer';
import { LogoutContainer } from 'app/logout/LogoutContainer';
import { Dashboard, Authorization } from 'ui/templates';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRoute } from './AuthorizedRoute';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.login}>
        {() => (
          <Authorization>
            <LoginContainer />
          </Authorization>
        )}
      </Route>

      <Route path={AppRoute.logout} component={LogoutContainer} />

      <Route path="/">
        {() => (
          <Dashboard>
            <Switch>
              <AuthorizedRoute path={AppRoute.home} exact component={Home} />
              <AuthorizedRoute path={AppRoute.pim} exact component={Home} />
              <AuthorizedRoute path={AppRoute.crm} exact component={Home} />
              <AuthorizedRoute path={AppRoute.sales} exact component={Home} />
              <Redirect to={AppRoute.home} />
            </Switch>
          </Dashboard>
        )}
      </Route>
    </Switch>
  );
};
