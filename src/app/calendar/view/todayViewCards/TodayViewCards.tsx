import React from 'react';

import { CalendarTypes } from 'api/types';
import { useLocale } from 'hooks';
import { Box, Typography } from 'ui/atoms';
import { TASKS } from 'api/mocks/tasks';

import { TaskCard } from './TaskCard';
import { TodayViewCardsProps } from './TodayViewCards.types';
import { ReminderCard } from './ReminderCard';

export const TodayViewCards = ({ appointments, type }: TodayViewCardsProps) => {
  const { formatMessage } = useLocale();

  if (type === CalendarTypes.Appointment) {
    return (
      <>
        <Typography variant="h4" color="textSecondary">
          {formatMessage({ id: 'calendar.appointments.this_day' })}
        </Typography>
        <Box mt={2} />
        {appointments.map(appointment => (
          <ReminderCard appointment={appointment} />
        ))}
        <Box mt={2} />
        <Typography variant="h4" color="textSecondary">
          {formatMessage({ id: 'calendar.appointments.specific_time_this_day' })}
        </Typography>
      </>
    );
  } else if (type === CalendarTypes.Task) {
    return (
      <>
        <Typography variant="h4" color="textSecondary">
          {formatMessage({ id: 'calendar.appointments.this_day' })}
        </Typography>
        <Box mt={2} />
        {TASKS.map(task => (
          <TaskCard
            task={{
              ...task,
              assigneeDetail: {
                id: '0001',
                firstName: 'John',
                lastName: 'Doe',
              },
            }}
          />
        ))}
        <Box mt={2} />
        <Typography variant="h4" color="textSecondary">
          {formatMessage({ id: 'calendar.appointments.specific_time_this_day' })}
        </Typography>
      </>
    );
  } else {
    return null;
  }
};
