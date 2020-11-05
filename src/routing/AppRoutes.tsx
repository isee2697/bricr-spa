import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { Pim } from 'app/pim/Pim';
import { Dashboard } from 'app/dashboard/Dashboard';
import { Dashboard as DashboardTemplate, Authorization } from 'ui/templates';
import { LogoutContainer } from 'app/auth/logout/LogoutContainer';
import { LoginContainer } from 'app/auth/login/LoginContainer';
import { ForgotPasswordContainer } from 'app/auth/forgotPassword/ForgotPasswordContainer';
import { ResetPasswordContainer } from 'app/auth/resetPassword/ResetPasswordContainer';
import { PimDetailsContainer } from 'app/pimDetails/PimDetailsContainer';
import { ObjectTypeDetailsContainer } from 'app/objectTypeDetails/ObjectTypeDetailsContainer';
import { useScrollToTop } from 'hooks';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { ProjectDetailsContainer } from 'app/projectDetails/ProjectDetailsContainer';
import { TasksContainer } from 'app/tasks/TasksContainer';
import { TaskDetailsContainer } from 'app/taskDetails/TaskDetailsContainer';
import { LinkedPropertiesDetailsContainer } from 'app/linkedPropertiesDetails/LinkedPropertiesDetailsContainer';
import { SettingsContainer } from 'app/settings/SettingsContainer';
import { RegisterContainer } from 'app/register/RegisterContainer';
import { SetupContainer } from 'app/register/setup/SetupContainer';
import { CrmContainer } from 'app/crm/CrmContainer';
import { DmsContainer } from 'app/dms/DmsContainer';
import { CrmRelationsDetailsContainer } from 'app/crmRelationsDetails/CrmRelationsDetailsContainer';
import { NotificationsContainer } from '../app/notifications/NotificationsContainer';
import { CalendarContainer } from 'app/calendar/CalendarContainer';
import { SalesContainer } from '../app/sales/SalesContainer';
import { EmailContainer } from '../app/email/EmailContainer';

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
      <Route path={AppRoute.register} exact>
        {() => (
          <Authorization>
            <RegisterContainer />
          </Authorization>
        )}
      </Route>
      <Route path={AppRoute.setup}>
        {() => (
          <Authorization>
            <SetupContainer />
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
                <AuthorizedRoute path={AppRoute.pim} component={Pim} />
                <AuthorizedRoute path={AppRoute.pimDetails} component={PimDetailsContainer} />
                <AuthorizedRoute path={AppRoute.linkedPropertyDetails} component={LinkedPropertiesDetailsContainer} />
                <AuthorizedRoute path={AppRoute.objectTypeDetails} component={ObjectTypeDetailsContainer} />
                <AuthorizedRoute path={AppRoute.projectDetails} component={ProjectDetailsContainer} />
                <AuthorizedRoute path={AppRoute.crm} exact component={CrmContainer} />
                <AuthorizedRoute path={AppRoute.crmRelationsDetails} component={CrmRelationsDetailsContainer} />
                <AuthorizedRoute path={AppRoute.sales} component={SalesContainer} />
                <AuthorizedRoute path={AppRoute.settings} component={SettingsContainer} />
                <AuthorizedRoute path={AppRoute.tasks} exact component={TasksContainer} />
                <AuthorizedRoute path={AppRoute.taskDetails} component={TaskDetailsContainer} />
                <AuthorizedRoute path={AppRoute.notifications} exact component={NotificationsContainer} />
                <AuthorizedRoute path={AppRoute.calendar} component={CalendarContainer} />
                <AuthorizedRoute path={AppRoute.dms} component={DmsContainer} />
                <AuthorizedRoute path={AppRoute.email} component={EmailContainer} />
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
