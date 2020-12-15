import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { CalendarViewContainer } from 'app/calendar/view/CalendarViewContainer';
import { NewAppointmentContainer } from 'app/calendar/new/NewAppointmentContainer';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';

import { CalendarProps } from './Calendar.types';
import { CalendarSettings } from './settings/Settings';

export const Calendar = ({ data, groups }: CalendarProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'common.calendar' })} />
      <Switch>
        <Route
          exact
          path={AppRoute.calendar}
          render={() => <CalendarViewContainer teamMembers={data} groups={groups} />}
        />
        <Route
          exact
          path={`${AppRoute.calendar}/settings`}
          render={() => <CalendarSettings isSidebarVisible={true} onSidebarClose={() => {}} onSidebarOpen={() => {}} />}
        />
        <Route exact path={AppRoute.newAppointment} render={() => <NewAppointmentContainer data={data} />} />
        <Route path={AppRoute.editAppointment} render={() => <NewAppointmentContainer data={data} isEdit />} />
        <Redirect to={AppRoute.calendar} />
      </Switch>
    </>
  );
};
