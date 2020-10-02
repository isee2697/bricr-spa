import React, { useState } from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';

import { Page } from 'ui/templates';
import { Grid, Tab, Tabs } from 'ui/atoms';
import { FormSection, WeekView, DayView, Scheduler, MonthView, Appointments } from 'ui/organisms';

import { DateView, CalendarProps } from './Calandar.types';

export const Calendar = ({ data, currentDate }: CalendarProps) => {
  const [currentView, setView] = useState(DateView.Week);

  return (
    <Grid container spacing={3} style={{ padding: '24px' }}>
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
    </Grid>
  );
};
