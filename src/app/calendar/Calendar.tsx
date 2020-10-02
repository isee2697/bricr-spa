import React, { useState } from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';

import { Page } from 'ui/templates';
import { Grid, Tab, Tabs } from 'ui/atoms';
import { FormSection, WeekView, DayView, Scheduler, MonthView, Appointments } from 'ui/organisms';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
  { startDate: '2018-11-01T12:01', endDate: '2018-11-01T13:35', title: 'Go to Cubiceyes' },
];

enum DateView {
  Week = 'Week',
  Day = 'Day',
  Month = 'Month',
}
export const Calendar = () => {
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
            <Scheduler data={schedulerData}>
              <ViewState currentDate={currentDate} />
              <DayView startDayHour={9} endDayHour={14} />
              <Appointments />
            </Scheduler>
          )}
          {currentView === DateView.Week && (
            <Scheduler data={schedulerData}>
              <ViewState currentDate={currentDate} />
              <WeekView startDayHour={9} endDayHour={14} />
              <Appointments />
            </Scheduler>
          )}
          {currentView === DateView.Month && (
            <Scheduler data={schedulerData}>
              <ViewState currentDate={currentDate} />
              <MonthView />
              <Appointments />
            </Scheduler>
          )}
          {/*<ViewState currentDate={currentDate} />*/}
          {/*{currentView === DateView.Day && <DayView startDayHour={9} endDayHour={14} />}*/}
          {/*{currentView === DateView.Week && <WeekView startDayHour={9} endDayHour={14} />}*/}
          {/*{currentView === DateView.Month && <MonthView />}*/}
        </FormSection>
      </Page>
    </Grid>
  );
};
