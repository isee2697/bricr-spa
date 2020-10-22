import React from 'react';
import { DateTime } from 'luxon';
import { DatePicker, Day } from '@material-ui/pickers';

import { DatePickerCalendarProps } from './DatePickerCalendar.types';
import { useStyles } from './DatePickerCalendar.styles';

export const DatePickerCalendar = ({ currentDate, onChangeDate }: DatePickerCalendarProps) => {
  const classes = useStyles();
  const today = DateTime.local();

  const dateIsSameDay = (firstDate: DateTime, secondDate: DateTime) => {
    return firstDate.day === secondDate.day && firstDate.year === secondDate.year;
  };

  return (
    <div className={classes.root}>
      <DatePicker
        autoOk
        orientation="portrait"
        variant="static"
        openTo="date"
        value={currentDate}
        disableToolbar
        onChange={onChangeDate}
        renderDay={(date: DateTime | null, selectedDate: DateTime | null, dayInCurrentMonth) => {
          date = date ?? DateTime.local();

          const dayComponent = (
            <Day
              current={dateIsSameDay(date, today)}
              hidden={!dayInCurrentMonth}
              selected={!!selectedDate && dateIsSameDay(date, selectedDate)}
            >
              {date && date.day}
            </Day>
          );

          return date && date.weekday !== 7 ? (
            dayComponent
          ) : (
            <div className={classes.week}>
              {dayComponent}
              <Day disabled={true}>{date.weekNumber}</Day>
            </div>
          );
        }}
      />
    </div>
  );
};
