import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useIntl } from 'react-intl';

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
import { Loader } from 'ui/atoms';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRoute } from './AuthorizedRoute';

const Pim = lazy(() => import('app/pim/Pim'));
const Dashboard = lazy(() => import('app/dashboard/Dashboard'));
const PimNvmContainer = lazy(() => import('app/pimNvm/PimNvmContainer'));
const ConfirmInviteContainer = lazy(() => import('app/register/confirmInvite/ConfirmInviteContainer'));
const VerifyUserContainer = lazy(() => import('app/register/verify/VerifyUserContainer'));
const InsightsContainer = lazy(() => import('app/insights/InsightsContainer'));
const SalesInvoiceDetailsContainer = lazy(() => import('app/salesInvoiceDetails/SalesInvoiceDetailsContainer'));
const CrmBusinessesDetailsContainer = lazy(() => import('app/crmBusinessesDetails/CrmBusinessesDetailsContainer'));
const CrmDocumentDetailsContainer = lazy(() =>
  import('app/crmRelationsDetails/documents/documentDetails/DocumentDetailsContainer'),
);
const PimDocumentDetailsContainer = lazy(() =>
  import('app/pimDetails/sections/documents/documentDetails/DocumentDetailsContainer'),
);
const SalesDetailsContainer = lazy(() => import('app/salesDetails/SalesDetailsContainer'));
const EmailContainer = lazy(() => import('app/email/EmailContainer'));
const SalesContainer = lazy(() => import('app/sales/SalesContainer'));
const CalendarContainer = lazy(() => import('app/calendar/CalendarContainer'));

export const AppRoutes = () => {
  const { formatMessage } = useIntl();
  useScrollToTop();

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/auth">
          {() => (
            <Authorization>
              <Switch>
                <Route path={AppRoute.login} exact component={LoginContainer} />
                <Route path={AppRoute.forgotPassword} exact component={ForgotPasswordContainer} />
                <Route path={AppRoute.resetPassword} exact component={ResetPasswordContainer} />
                <Route path={AppRoute.verify} exact component={VerifyUserContainer} />
                <Route path={AppRoute.confirmInvite} exact component={ConfirmInviteContainer} />
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
        <Route path={AppRoute.verify}>
          {() => (
            <Authorization>
              <VerifyUserContainer />
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
                  <AuthorizedRoute path={AppRoute.pimNvm} exact component={PimNvmContainer} />
                  <AuthorizedRoute path={AppRoute.pim} component={Pim} />
                  <AuthorizedRoute path={AppRoute.pimDocumentDetails} component={PimDocumentDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.pimDetails} component={PimDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.linkedPropertyDetails} component={LinkedPropertiesDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.objectTypeDetails} component={ObjectTypeDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.projectDetails} component={ProjectDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.crm} component={CrmContainer} />
                  <AuthorizedRoute
                    path={AppRoute.crmRelationsDocumentDetails}
                    component={CrmDocumentDetailsContainer}
                  />
                  <AuthorizedRoute path={AppRoute.crmRelationsDetails} component={CrmRelationsDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.crmBusinessesDetails} component={CrmBusinessesDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.sales} component={SalesContainer} />
                  <AuthorizedRoute path={AppRoute.salesDetails} component={SalesDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.salesInvoiceDetails} component={SalesInvoiceDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.settings} component={SettingsContainer} />
                  <AuthorizedRoute path={AppRoute.tasks} exact component={TasksContainer} />
                  <AuthorizedRoute path={AppRoute.taskDetails} component={TaskDetailsContainer} />
                  <AuthorizedRoute path={AppRoute.notifications} exact component={NotificationsContainer} />
                  <AuthorizedRoute path={AppRoute.calendar} component={CalendarContainer} />
                  <AuthorizedRoute path={AppRoute.dms} component={DmsContainer} />
                  <AuthorizedRoute path={AppRoute.email} component={EmailContainer} />
                  <AuthorizedRoute path={AppRoute.insights} component={InsightsContainer} />
                  <Route path={AppRoute.logout} component={LogoutContainer} />
                  <Redirect to={AppRoute.home} />
                </Switch>
              </DashboardTemplate>
            </>
          )}
        </Route>
      </Switch>
    </Suspense>
  );
};
