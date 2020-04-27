import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Dashboard, Authorization } from 'ui/templates';
import { Home } from 'app/home/Home';
import { LogoutContainer } from 'app/auth/logout/LogoutContainer';
import { LoginContainer } from 'app/auth/login/LoginContainer';
import { ForgotPasswordContainer } from 'app/auth/forgotPassword/ForgotPasswordContainer';
import { ResetPasswordContainer } from 'app/auth/resetPassword/ResetPasswordContainer';

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
              <Route path={AppRoute.resetPassword} exact component={ResetPasswordContainer} />
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
