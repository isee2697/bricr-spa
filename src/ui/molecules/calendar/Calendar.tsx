import React from 'react';

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

import { CalendarProps, ConvertDataFunction, CalendarTypeResource } from './Calandar.types';

export const connectDataToResources: ConvertDataFunction = schedulerData => {
  return schedulerData.map(item => ({
    ...item,
    type: CalendarTypeResource.find(type => type.text === item.type)?.id,
  }));
};

export const Calendar = ({ data, currentDate, view }: CalendarProps) => {
  const { locale } = useLocale();

  return (
    <Scheduler locale={locale} firstDayOfWeek={1} data={connectDataToResources(data)}>
      <ViewState currentDate={currentDate} currentViewName={view} />
      <DayView />
      <WeekView />
      <MonthView />
      <AllDayPanel />
      <Appointments />
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
