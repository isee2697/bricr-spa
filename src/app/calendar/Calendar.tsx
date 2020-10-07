import React, { useState } from 'react';

import { Page } from 'ui/templates';
import { Tab, Tabs, Box } from 'ui/atoms';
import {
  FormSection,
  WeekView,
  DayView,
  Scheduler,
  MonthView,
  Appointments,
  ViewState,
  AllDayPanel,
  AppointmentTooltip,
  AppointmentForm,
  CurrentTimeIndicator,
} from 'ui/organisms';

import { DateView, CalendarProps } from './Calandar.types';

export const Calendar = ({ data, currentDate }: CalendarProps) => {
  const [currentView, setView] = useState(DateView.Week);

  return (
    <Box p={3}>
      <Page title="calendar.title">
        <FormSection title="calendar.week.title" isEditable={false}>
          <Tabs value={currentView}>
            <Tab onClick={() => setView(DateView.Day)} label="Day" />
            <Tab onClick={() => setView(DateView.Week)} label="Week" />
            <Tab onClick={() => setView(DateView.Month)} label="Month" />
          </Tabs>

          <Scheduler data={data}>
            <ViewState currentDate={currentDate} currentViewName={currentView} />
            <DayView startDayHour={9} endDayHour={14} />
            <WeekView startDayHour={9} endDayHour={14} />
            <MonthView />
            <AllDayPanel />
            <Appointments />
            <CurrentTimeIndicator updateInterval={1} />
            <AppointmentTooltip showCloseButton />
            <AppointmentForm readOnly />
          </Scheduler>
        </FormSection>
      </Page>
    </Box>
  );
};
