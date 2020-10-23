import React from 'react';
import { useTheme } from '@material-ui/core';

import {
  AllDayPanel,
  AppointmentForm,
  Appointments,
  AppointmentTooltip,
  CurrentTimeIndicator,
  DayView,
  MonthView,
  Resources,
  Scheduler,
  ViewState,
  WeekView,
} from 'ui/organisms';
import { useLocale } from 'hooks';

import { CalendarProps, ConvertDataFunction, CalendarTypeResource, DateView } from './Calandar.types';

export const connectDataToResources: ConvertDataFunction = schedulerData => {
  return schedulerData.map(item => ({
    ...item,
    type: CalendarTypeResource.find(type => type.text === item.type)?.id,
  }));
};

export const Calendar = ({ data, currentDate, view, height }: CalendarProps) => {
  const { locale } = useLocale();
  const { spacing, breakpoints } = useTheme();

  return (
    <Scheduler
      height={height ?? spacing(breakpoints.up('xl') ? 70 : 60)}
      locale={locale}
      firstDayOfWeek={1}
      data={connectDataToResources(data)}
      currentView={view}
    >
      <ViewState currentDate={currentDate} currentViewName={view} />
      <DayView />
      <DayView disableHead name={DateView.Group} />
      <WeekView />
      <MonthView />
      <AllDayPanel />
      <Appointments view={view} />
      <CurrentTimeIndicator updateInterval={60000} />
      <AppointmentTooltip showCloseButton />
      <AppointmentForm readOnly />
      <Resources
        data={[{ fieldName: 'type', title: 'type', instances: CalendarTypeResource }]}
        mainResourceName="type"
      />
    </Scheduler>
  );
};
