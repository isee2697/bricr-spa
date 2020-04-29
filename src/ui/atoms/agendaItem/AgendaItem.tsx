import React from 'react';
import { DateTime } from 'luxon';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { AgendaItemProps } from './AgendaItem.types';
import { useStyles } from './AgendaItem.styles';

export const AgendaItem = ({ isAllDay, startDate, endDate, children }: AgendaItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const startTime = startDate && !isAllDay ? DateTime.fromISO(startDate).toFormat('HH:mm') : null;
  const endTime =
    endDate && !isAllDay ? (
      <Typography className={classes.endDate} variant="h6">
        {DateTime.fromISO(endDate).toFormat('HH:mm')}
      </Typography>
    ) : null;

  return (
    <Grid alignItems="center" container>
      <Grid className={classes.date} item>
        <Typography className={classes.startDate} variant="h5">
          {isAllDay ? formatMessage({ id: AppMessages['date.all_day'] }) : startTime}
        </Typography>
        {endTime}
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};
