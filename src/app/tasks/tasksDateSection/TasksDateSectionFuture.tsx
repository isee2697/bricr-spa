import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { Grid, Typography, Checkbox } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksDateSectionFuture.styles';
import { TasksDateSectionFutureProps } from './TasksDateSectionFuture.types';

export const TasksDateSectionFuture = ({ deadlines, onSelectDate }: TasksDateSectionFutureProps) => {
  const from = deadlines[0].from;
  const to = deadlines[0].to;
  const [withoutDeadline, setWithoutDeadline] = useState(false);
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const handleSelect = (date: MaterialUiPickersDate, key: 'from' | 'to') => {
    onSelectDate([
      {
        from: key === 'from' ? date?.startOf('day').toISO() : from,
        to: key === 'to' ? date?.endOf('day').toISO() : to,
      },
    ]);
  };

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item>
        <Typography
          variant="h4"
          onClick={() => setWithoutDeadline(!withoutDeadline)}
          className={classes.checkboxWrapper}
        >
          <Checkbox color="primary" className={classes.checkbox} />
          {formatMessage({ id: 'tasks.without_deadline' })}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <Typography variant="h4" className={classes.dateLabel}>
              {formatMessage({ id: 'common.from' })}
            </Typography>
            <KeyboardDatePicker
              clearable
              InputProps={{ classes: { root: classes.datePickerInput } }}
              onChange={date => handleSelect(date, 'from')}
              value={from ? DateTime.fromISO(from) : null}
              className={classes.inlineBlock}
              format="MM.dd.yyyy"
              minDate={DateTime.local()
                .plus({ days: 8 })
                .toISO()}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.dateLabel}>
              {formatMessage({ id: 'common.to' })}
            </Typography>
            <KeyboardDatePicker
              clearable
              InputProps={{ classes: { root: classes.datePickerInput } }}
              onChange={date => handleSelect(date, 'to')}
              value={to ? DateTime.fromISO(to) : null}
              className={classes.inlineBlock}
              format="MM.dd.yyyy"
              minDate={
                from ||
                DateTime.local()
                  .plus({ days: 8 })
                  .toISO()
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
