import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Dashboard } from 'app/dashboard/Dashboard';
import { Dashboard as DashboardTemplate, Authorization } from 'ui/templates';
import { LogoutContainer } from 'app/auth/logout/LogoutContainer';
import { LoginContainer } from 'app/auth/login/LoginContainer';
import { ForgotPasswordContainer } from 'app/auth/forgotPassword/ForgotPasswordContainer';
import { ResetPasswordContainer } from 'app/auth/resetPassword/ResetPasswordContainer';
import { PimContainer } from 'app/pim/PimContainer';
import { PimDetailsContainer } from 'app/pimDetails/PimDetailsContainer';
import { useScrollToTop } from 'hooks';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRoute } from './AuthorizedRoute';

export const AppRoutes = () => {
  useScrollToTop();

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
          <DashboardTemplate>
            <Switch>
              <AuthorizedRoute path={AppRoute.home} exact component={Dashboard} />
              <AuthorizedRoute path={AppRoute.pim} exact component={PimContainer} />
              <AuthorizedRoute path={AppRoute.pimDetails} component={PimDetailsContainer} />
              <AuthorizedRoute path={AppRoute.crm} exact component={Dashboard} />
              <AuthorizedRoute path={AppRoute.sales} exact component={Dashboard} />
              <Route path={AppRoute.logout} component={LogoutContainer} />
              <Redirect to={AppRoute.home} />
            </Switch>
          </DashboardTemplate>
        )}
      </Route>
    </Switch>
  );
};
