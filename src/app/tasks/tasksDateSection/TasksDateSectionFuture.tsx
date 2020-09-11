import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import { Grid, Typography, Checkbox } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksDateSectionFuture.styles';
import { TasksDateSectionFutureProps } from './TasksDateSectionFuture.types';

export const TasksDateSectionFuture = ({ onSelectDate }: TasksDateSectionFutureProps) => {
  const [from, setFrom] = useState(DateTime.local().plus({ days: 8 }));
  const [to, setTo] = useState(DateTime.local().plus({ days: 8 }));
  const [withoutDeadline, setWithoutDeadline] = useState(false);
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const onChangeFrom = (date: MaterialUiPickersDate) => {
    if (date) {
      setFrom(date);

      if (date.diff(to, 'days').days > 0) {
        setTo(date);
      }
    }
  };

  const onChangeTo = (date: MaterialUiPickersDate) => {
    if (date) {
      setTo(date);
    }
  };

  useEffect(() => {
    onSelectDate({
      from: from.toISO(),
      to: to.toISO(),
    });
  }, [from, to, onSelectDate]);

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
              InputProps={{ classes: { root: classes.datePickerInput } }}
              onChange={date => onChangeFrom(date)}
              value={from}
              className={classes.inlineBlock}
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
              InputProps={{ classes: { root: classes.datePickerInput } }}
              onChange={date => onChangeTo(date)}
              value={to}
              className={classes.inlineBlock}
              minDate={from.toISO()}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
