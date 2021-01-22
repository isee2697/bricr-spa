import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import { useTheme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { DateTime } from 'luxon';

import { CalendarTypes } from 'api/types';
import { Box } from 'ui/atoms';
import { ReminderCard } from '../todayViewCards/ReminderCard';
import { TaskCard } from '../todayViewCards/TaskCard';
import { TASKS } from 'api/mocks/tasks';

import { useStyles } from './TodaySidePanel.styles';
import { TodaySidePanelProps } from './TodaySidePanel.types';

export const TodaySidePanel = ({ date, appointments }: TodaySidePanelProps) => {
  const classes = useStyles();
  const theme = useTheme();

  const getAppointmentCardCoordinates = (appointment: AppointmentModel): CSSProperties => {
    const startTimeOffset = DateTime.fromISO(appointment.startDate as string).diff(date.startOf('day'), 'hour').hours;

    return {
      position: 'absolute',
      top: `${theme.spacing(10) + theme.spacing(7.5) * 2 * startTimeOffset}px`,
      width: '100%',
    };
  };

  return (
    <Box className={classes.root}>
      {appointments.map((appointment, index) => (
        <Box key={index} style={getAppointmentCardCoordinates(appointment)} className={classes.item}>
          {appointment.type === CalendarTypes.Task ? (
            <TaskCard
              task={{
                ...TASKS[0],
                title: appointment.title || '',
                startDate: appointment.startDate as string,
                deadline: appointment.endDate as string,
              }}
            />
          ) : (
            <ReminderCard appointment={appointment} />
          )}
        </Box>
      ))}
    </Box>
  );
};
