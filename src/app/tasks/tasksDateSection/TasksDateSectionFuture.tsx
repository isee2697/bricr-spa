import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Grid, Typography, Checkbox } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksDateSectionFuture.styles';
import { TasksDateSectionFutureProps } from './TasksDateSectionFuture.types';

export const TasksDateSectionFuture = ({ onSelectDate }: TasksDateSectionFutureProps) => {
  const [from, setFrom] = useState<DateTime | null>(null);
  const [to, setTo] = useState<DateTime | null>(null);
  const [withoutDeadline, setWithoutDeadline] = useState(false);
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const onChangeFrom = (date: MaterialUiPickersDate) => {
    if (date) {
      setFrom(date);
      handleSelect();
    }
  };

  const onChangeTo = (date: MaterialUiPickersDate) => {
    if (date) {
      setTo(date);
      handleSelect();
    }
  };

  const handleSelect = () => {
    onSelectDate({
      from: from ? from.toISO() : null,
      to: to ? to.toISO() : null,
    });
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
              onChange={date => onChangeFrom(date)}
              value={from}
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
              onChange={date => onChangeTo(date)}
              value={to}
              className={classes.inlineBlock}
              format="MM.dd.yyyy"
              minDate={
                from?.toISO() ||
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
