import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { Page } from 'ui/templates';
import { Box, Button, Tab, Tabs, Typography } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import { AddIcon, ArrowLeftIcon, ArrowRightIcon, SettingsIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { CalendarViewProps } from './CalendarView.types';
import { useStyles } from './CalendarView.styles';

const getViewTitle = (view: DateView, currentDate: DateTime, formatMessage: (data: { id: string }) => string) => {
  switch (view) {
    default:
    case DateView.Week:
      return (
        <Typography variant="h1">
          {`${currentDate.startOf('week').day} - ${currentDate.endOf('week').day} ${currentDate.monthLong} (${
            currentDate.weekNumber
          } 
          ${formatMessage({ id: 'common.week' })})`}
        </Typography>
      );
  }
};

export const CalendarView = ({ data }: CalendarViewProps) => {
  const [currentView, setView] = useState(DateView.Week);
  const classes = useStyles();
  const [showDate, setShowDate] = useState(DateTime.local());
  const { formatMessage } = useLocale();

  const { push } = useHistory();

  const switchStartDate = (status: 'next' | 'prev') => {
    setShowDate(showDate.plus({ [currentView]: status === 'next' ? 1 : -1 }));
  };

  return (
    <Box p={3}>
      <Page
        showHeader
        // title={formatMessage({ id: `calendar.${currentView.toLowerCase()}.title` })}
        afterTitle={
          <div className={classes.buttons}>
            <>{getViewTitle(currentView, showDate, formatMessage)}</>
            <Button variant="contained" onClick={() => switchStartDate('prev')}>
              <ArrowLeftIcon />
            </Button>
            <Button variant="contained" onClick={() => switchStartDate('next')}>
              <ArrowRightIcon />
            </Button>
          </div>
        }
        headerProps={{
          customAction: (
            <>
              <Box mt={1} ml="auto" mr={5}>
                <SettingsIcon />
              </Box>
              <Button onClick={() => push(AppRoute.newAppointment)} variant="contained" color="primary">
                <AddIcon color="inherit" /> {formatMessage({ id: 'calendar.appointment.add' })}
              </Button>
            </>
          ),
        }}
        titleActions={<></>}
      >
        <FormSection title={formatMessage({ id: 'calendar.week.title' })} isEditable={false}>
          <Tabs value={currentView}>
            <Tab onClick={() => setView(DateView.Day)} label="Day" />
            <Tab onClick={() => setView(DateView.Week)} label="Week" />
            <Tab onClick={() => setView(DateView.Month)} label="Month" />
          </Tabs>

          <CalendarMolecule view={currentView} currentDate={showDate.toJSDate()} data={data} />
        </FormSection>
      </Page>
    </Box>
  );
};
