import React from 'react';
import { DateTime } from 'luxon';

import { Calendar } from './Calendar';

export const CalendarContainer = () => {
  const currentDate = DateTime.fromISO('2018-11-01T09:45').toJSDate();
  const schedulerData = [
    {
      startDate: DateTime.fromISO('2018-11-01T09:45').toJSDate(),
      endDate: DateTime.fromISO('2018-11-01T11:00').toJSDate(),
      title: 'Meeting',
    },
    {
      startDate: DateTime.fromISO('2018-11-01T12:00').toJSDate(),
      endDate: DateTime.fromISO('2018-11-01T13:30').toJSDate(),
      title: 'Go to a gym',
    },
    {
      startDate: DateTime.fromISO('2018-11-01T12:01').toJSDate(),
      endDate: DateTime.fromISO('2018-11-01T13:35').toJSDate(),
      title: 'Go to Cubiceyes',
    },
  ];

  return <Calendar currentDate={currentDate} data={schedulerData} />;
};
