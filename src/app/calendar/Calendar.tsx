import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Page } from 'ui/templates';
import { Tab, Tabs, Box, Button } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { Calendar as CalendarMolecule } from 'ui/molecules';
import { AddIcon, SettingsIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DateView } from 'ui/molecules/calendar/Calandar.types';

import { CalendarProps } from './Calendar.types';

export const Calendar = ({ data }: CalendarProps) => {
  const [currentView, setView] = useState(DateView.Week);
  const { formatMessage } = useLocale();
  const currentDate = DateTime.local().toJSDate();

  return (
    <Box p={3}>
      <Page
        title="calendar.title"
        afterTitle={currentView === DateView.Week && <>buttons</>}
        titleActions={
          <>
            <Box mt={1} mr={5}>
              <SettingsIcon />
            </Box>
            <Button variant="contained" color="primary">
              <AddIcon color="inherit" /> {formatMessage({ id: 'calendar.appointment.add' })}
            </Button>
          </>
        }
      >
        <FormSection title="calendar.week.title" isEditable={false}>
          <Tabs value={currentView}>
            <Tab onClick={() => setView(DateView.Day)} label="Day" />
            <Tab onClick={() => setView(DateView.Week)} label="Week" />
            <Tab onClick={() => setView(DateView.Month)} label="Month" />
          </Tabs>

          <CalendarMolecule view={currentView} currentDate={currentDate} data={data} />
        </FormSection>
      </Page>
    </Box>
  );
};
