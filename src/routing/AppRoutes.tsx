import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { Dashboard } from 'app/dashboard/Dashboard';
import { Dashboard as DashboardTemplate, Authorization } from 'ui/templates';
import { LogoutContainer } from 'app/auth/logout/LogoutContainer';
import { LoginContainer } from 'app/auth/login/LoginContainer';
import { ForgotPasswordContainer } from 'app/auth/forgotPassword/ForgotPasswordContainer';
import { ResetPasswordContainer } from 'app/auth/resetPassword/ResetPasswordContainer';
import { PimContainer } from 'app/pim/PimContainer';
import { ProjectContainer } from 'app/project/ProjectContainer';
import { PimDetailsContainer } from 'app/pimDetails/PimDetailsContainer';
import { ProjectDetails } from 'app/projectDetails/ProjectDetails';
import { useScrollToTop } from 'hooks';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRoute } from './AuthorizedRoute';

export const AppRoutes = () => {
  const { formatMessage } = useIntl();
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
          <>
            <NavBreadcrumb title={formatMessage({ id: 'header.links.home' })} to={'/'} />
            <DashboardTemplate>
              <Switch>
                <AuthorizedRoute path={AppRoute.home} exact component={Dashboard} />
                <AuthorizedRoute path={AppRoute.pim} exact component={PimContainer} />
                <AuthorizedRoute path={AppRoute.project} exact component={ProjectContainer} />
                <AuthorizedRoute path={AppRoute.pimDetails} component={PimDetailsContainer} />
                <AuthorizedRoute path={AppRoute.projectDetails} component={ProjectDetails} />
                <AuthorizedRoute path={AppRoute.crm} exact component={Dashboard} />
                <AuthorizedRoute path={AppRoute.sales} exact component={Dashboard} />
                <Route path={AppRoute.logout} component={LogoutContainer} />
                <Redirect to={AppRoute.home} />
              </Switch>
            </DashboardTemplate>
          </>
        )}
      </Route>
    </Switch>
  );
};
