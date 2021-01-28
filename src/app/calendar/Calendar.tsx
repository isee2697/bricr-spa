import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { CalendarViewContainer } from 'app/calendar/view/CalendarViewContainer';
import { NewAppointmentContainer } from 'app/calendar/new/NewAppointmentContainer';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';

import { CalendarProps } from './Calendar.types';
import { CalendarSettingsContainer } from './settings/SettingsContainer';

export const Calendar = ({ teamMembers, accounts, groups }: CalendarProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'common.calendar' })} />
      <Switch>
        <Route
          exact
          path={`${AppRoute.calendar}/settings`}
          render={() => (
            <CalendarSettingsContainer
              isSidebarVisible={true}
              onSidebarClose={() => {}}
              onSidebarOpen={() => {}}
              accounts={accounts}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.calendarAppointments}
          render={({ match }) => (
            <CalendarViewContainer
              teamMembers={teamMembers}
              groups={groups}
              account={accounts.find(item => item.id === match.params.accountId)}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.newAppointment}
          render={({ match }) => (
            <NewAppointmentContainer
              teamMembers={teamMembers}
              account={accounts.find(item => item.id === match.params.accountId)}
            />
          )}
        />
        <Route
          path={AppRoute.editAppointment}
          render={({ match }) => (
            <NewAppointmentContainer
              teamMembers={teamMembers}
              isEdit
              account={accounts.find(item => item.id === match.params.accountId)}
            />
          )}
        />
        <Redirect
          to={
            accounts.length ? `${AppRoute.calendar}/${accounts?.[0]?.id}/appointments` : `${AppRoute.calendar}/settings`
          }
        />
      </Switch>
    </>
  );
};
