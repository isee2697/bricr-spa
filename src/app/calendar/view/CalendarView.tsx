import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';

import { Page } from 'ui/templates';
import { Tab, Tabs, Box, Button } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import { AddIcon, ArrowLeftIcon, ArrowRightIcon, BackIcon, SettingsIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { CalendarViewProps } from './CalendarView.types';

export const CalendarView = ({ data }: CalendarViewProps) => {
  const [currentView, setView] = useState(DateView.Week);

  const [showDate, setShowDate] = useState(DateTime.local());
  const { formatMessage } = useLocale();

  const { push } = useHistory();

  const switchStartDate = (status: 'next' | 'prev') => {
    setShowDate(current => current.plus({ [currentView]: status === 'next' ? 1 : -1 }));
  };

  return (
    <Box p={3}>
      <Page
        showHeader
        title="calendar.title"
        afterTitle={
          <>
            <Button onClick={() => switchStartDate('prev')}>
              <ArrowLeftIcon />
            </Button>
            <Button onClick={() => switchStartDate('next')}>
              <ArrowRightIcon />
            </Button>
          </>
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
