import React from 'react';
import { DateTime } from 'luxon';

import { Box, Card, CardContent, Typography } from 'ui/atoms';

import { useStyles } from './TodayViewCards.styles';
import { ReminderCardProps } from './TodayViewCards.types';

export const ReminderCard = ({ appointment }: ReminderCardProps) => {
  const { title, startDate, endDate } = appointment;
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography variant="h6" color="textSecondary">
          {DateTime.fromISO(startDate as string).toLocaleString(DateTime.TIME_SIMPLE)} -{' '}
          {DateTime.fromISO(endDate as string).toLocaleString(DateTime.TIME_SIMPLE)}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          De Dreef b077, 1716 KK Oprneer
        </Typography>
        <Box mt={1} />
        <Typography variant="h5" className={classes.fontWeightBold}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
