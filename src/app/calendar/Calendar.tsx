import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { CalendarViewContainer } from 'app/calendar/view/CalendarViewContainer';
import { NewAppointmentContainer } from 'app/calendar/new/NewAppointmentContainer';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';

import { CalendarProps } from './Calendar.types';

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
        <Route exact path={AppRoute.newAppointment} render={() => <NewAppointmentContainer data={data} />} />
        <Redirect to={AppRoute.calendar} />
      </Switch>
    </>
  );
};
