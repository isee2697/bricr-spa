import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import { Grid, Typography, Checkbox } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksDateSectionFuture.styles';

export const TasksDateSectionFuture = () => {
  const [from, setFrom] = useState(DateTime.local());
  const [to, setTo] = useState(DateTime.local());
  const [withoutDeadline, setWithoutDeadline] = useState(false);
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const onChangeFrom = (date: MaterialUiPickersDate, value?: string | null | undefined) => () => {
    if (date) {
      setFrom(date);
    }
  };

  const onChangeTo = (date: MaterialUiPickersDate, value?: string | null | undefined) => () => {
    if (date) {
      setTo(date);
    }
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
              InputProps={{ classes: { root: classes.datePickerInput } }}
              onChange={onChangeFrom}
              value={from}
              className={classes.inlineBlock}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.dateLabel}>
              {formatMessage({ id: 'common.to' })}
            </Typography>
            <KeyboardDatePicker
              InputProps={{ classes: { root: classes.datePickerInput } }}
              onChange={onChangeTo}
              value={to}
              className={classes.inlineBlock}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
