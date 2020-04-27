import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from 'app/home/Home';
import { LoginContainer } from 'app/login/LoginContainer';
import { LogoutContainer } from 'app/logout/LogoutContainer';
import { Dashboard, Authorization } from 'ui/templates';
import { ForgotPasswordContainer } from 'app/forgotPassword/ForgotPasswordContainer';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRoute } from './AuthorizedRoute';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/auth">
        {() => (
          <Authorization>
            <Switch>
              <Route path={AppRoute.login} exact component={LoginContainer} />
              <Route path={AppRoute.forgotPassword} exact component={ForgotPasswordContainer} />
              <Redirect to={AppRoute.home} />
            </Switch>
          </Authorization>
        )}
      </Route>

      <Route path="/">
        {() => (
          <Dashboard>
            <Switch>
              <AuthorizedRoute path={AppRoute.home} exact component={Home} />
              <AuthorizedRoute path={AppRoute.pim} exact component={Home} />
              <AuthorizedRoute path={AppRoute.crm} exact component={Home} />
              <AuthorizedRoute path={AppRoute.sales} exact component={Home} />
              <Route path={AppRoute.logout} component={LogoutContainer} />
              <Redirect to={AppRoute.home} />
            </Switch>
          </Dashboard>
        )}
      </Route>
    </Switch>
  );
};
