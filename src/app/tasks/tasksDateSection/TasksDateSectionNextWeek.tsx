import React, { useState } from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Grid, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksDateSectionNextWeek.styles';

export const TasksDateSectionNextWeek = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const [selectedDates, setSelectedDates] = useState<number[]>([]);

  const selectDate = (index: number) => {
    if (selectedDates.findIndex(date => date === index) >= 0) {
      setSelectedDates([...selectedDates.filter(date => date !== index)]);
    } else {
      setSelectedDates([...selectedDates, index]);
    }
  };

  const today: DateTime = DateTime.local();
  const days = Array.from(new Array(7), (value, index) => index);

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item>
        <Box className={classes.title}>
          {selectedDates.length === 0 && (
            <Typography variant="h3" className={classes.inlineBlock}>
              {formatMessage({ id: 'tasks.tasks_next_week' })}
            </Typography>
          )}
          {selectedDates.length > 0 && (
            <>
              <Typography variant="h3" className={clsx(classes.inlineBlock, classes.marginRightHalf)}>
                {formatMessage({ id: 'tasks.tasks_for' })}{' '}
              </Typography>
              <Typography variant="h3" className={clsx(classes.inlineBlock, classes.fontWeightBold)}>
                {formatMessage({ id: 'tasks.selected_days' }, { count: selectedDates.length })}
              </Typography>
            </>
          )}
        </Box>
      </Grid>
      <Grid item>
        <Grid container>
          {days.map(index => (
            <Grid
              key={index}
              item
              className={clsx(classes.dayBox, selectedDates.findIndex(date => date === index) >= 0 && 'selected')}
              onClick={() => selectDate(index)}
            >
              <Typography variant="h3">{today.plus({ days: index + 1 }).day}</Typography>
              <Typography variant="h6" className={classes.weekDay}>
                {today.plus({ days: index + 1 }).weekdayShort}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
