import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { CalendarViewContainer } from 'app/calendar/view/CalendarViewContainer';
import { NewAppointmentContainer } from 'app/calendar/new/NewAppointmentContainer';
import { NavBreadcrumb } from 'ui/atoms';

import { CalendarProps } from './Calendar.types';

export const Calendar = ({ data }: CalendarProps) => {
  return (
    <>
      <NavBreadcrumb title={'calendar'} />
      <Switch>
        <Route exact path={AppRoute.calendar} render={() => <CalendarViewContainer />} />
        <Route exact path={AppRoute.newAppointment} render={() => <NewAppointmentContainer />} />
        <Redirect to={AppRoute.calendar} />
      </Switch>
    </>
  );
};
