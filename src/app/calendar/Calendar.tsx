import React, { useState } from 'react';
import { Page } from 'ui/templates';
import { Tab, Tabs, Box } from 'ui/atoms';
import { FormSection, WeekView, DayView, Scheduler, MonthView, Appointments, ViewState } from 'ui/organisms';

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

          {currentView === DateView.Day && (
            <Scheduler data={data}>
              <ViewState currentDate={currentDate} />
              <DayView startDayHour={9} endDayHour={14} />
              <Appointments />
            </Scheduler>
          )}
          {currentView === DateView.Week && (
            <Scheduler data={data}>
              <ViewState currentDate={currentDate} />
              <WeekView startDayHour={9} endDayHour={14} />
              <Appointments />
            </Scheduler>
          )}
          {currentView === DateView.Month && (
            <Scheduler data={data}>
              <ViewState currentDate={currentDate} />
              <MonthView />
              <Appointments />
            </Scheduler>
          )}
        </FormSection>
      </Page>
    </Box>
  );
};
