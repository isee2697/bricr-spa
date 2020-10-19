import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Grid, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksDateSectionNextWeek.styles';
import { TasksDateSectionNextWeekProps } from './TasksDateSectionNextWeek.types';

export const TasksDateSectionNextWeek = ({ deadlines, onSelectDate }: TasksDateSectionNextWeekProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const selectedDates: number[] = [];

  for (let dateIndex = 0; dateIndex < 7; dateIndex++) {
    const deadline = deadlines.find(
      dateRange =>
        DateTime.fromISO(dateRange.from as string).startOf('day') <= DateTime.local().plus({ day: dateIndex + 1 }) &&
        DateTime.fromISO(dateRange.to as string).endOf('day') > DateTime.local().plus({ day: dateIndex + 1 }),
    );

    if (deadline) {
      selectedDates.push(dateIndex);
    }
  }

  const selectDate = (index: number) => {
    if (selectedDates.includes(index)) {
      onSelectDate(
        selectedDates
          .filter(selectedDate => selectedDate !== index)
          .map(index => ({
            from: DateTime.local()
              .plus({ days: index + 1 })
              .startOf('day')
              .toISO(),
            to: DateTime.local()
              .plus({ days: index + 1 })
              .endOf('day')
              .toISO(),
          })),
      );
    } else {
      onSelectDate(
        [...selectedDates, index].map(index => ({
          from: DateTime.local()
            .plus({ days: index + 1 })
            .startOf('day')
            .toISO(),
          to: DateTime.local()
            .plus({ days: index + 1 })
            .endOf('day')
            .toISO(),
        })),
      );
    }
  };

  const today: DateTime = DateTime.local();
  const days = Array.from(new Array(7), (value, index) => index);

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item>
        <Box className={classes.title}>
          {selectedDates.length === 7 && (
            <Typography variant="h3" className={classes.inlineBlock}>
              {formatMessage({ id: 'tasks.tasks_next_week' })}
            </Typography>
          )}
          {selectedDates.length < 7 && (
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
              className={clsx(classes.dayBox, selectedDates.includes(index) && 'selected')}
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
