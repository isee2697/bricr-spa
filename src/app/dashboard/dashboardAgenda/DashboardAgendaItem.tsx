import React from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { Box, Typography } from 'ui/atoms';
import { Appointment } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useNylasAccountState } from 'hooks';

import { useStyles } from './DashboardAgenda.styles';

export const DashboardAgendaItem = ({ id, from, to, title }: Appointment) => {
  const classes = useStyles();
  const { push } = useHistory();

  const { calendarAccounts: accounts } = useNylasAccountState();

  return (
    <Box
      alignItems="center"
      display="flex"
      flexWrap="nowrap"
      className={classes.task}
      onClick={() => push(AppRoute.calendarAppointments.replace(':accountId', accounts[0].id))}
    >
      <Box className={classes.date}>
        <Typography className={classes.startDate} variant="h5">
          {from ? DateTime.fromISO(from).toLocaleString(DateTime.DATE_MED) : '-'}
        </Typography>
        <Typography className={classes.endDate} variant="h5">
          {to ? DateTime.fromISO(to).toLocaleString(DateTime.DATE_MED) : '-'}
        </Typography>
      </Box>
      <Box className={classes.title}>{title}</Box>
    </Box>
  );
};
