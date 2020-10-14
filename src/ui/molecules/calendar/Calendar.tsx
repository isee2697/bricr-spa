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

import { CalendarProps, ConvertDataFunction, CalendarTypeResource } from './Calandar.types';

export const connectDataToResources: ConvertDataFunction = schedulerData => {
  return schedulerData.map(item => ({
    ...item,
    type: CalendarTypeResource.find(type => type.text === item.type)?.id,
  }));
};

export const Calendar = ({ data, currentDate, view }: CalendarProps) => {
  return (
    <Scheduler data={connectDataToResources(data)}>
      <ViewState currentDate={currentDate} currentViewName={view} />
      <DayView />
      <WeekView />
      <MonthView />
      <AllDayPanel />
      <Appointments />
      <CurrentTimeIndicator updateInterval={1000} />
      <AppointmentTooltip showCloseButton />
      <AppointmentForm readOnly />
      <Resources
        data={[{ fieldName: 'type', title: 'type', instances: CalendarTypeResource }]}
        mainResourceName="type"
      />
    </Scheduler>
  );
};
