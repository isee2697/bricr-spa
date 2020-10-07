import React from 'react';
import { DateTime } from 'luxon';

import { Calendar } from './Calendar';

export const CalendarContainer = () => {
  const now = new Date();
  const currentDate = now;
  const schedulerData = [
    {
      startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
      endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
      title: 'Meeting',
    },
    {
      startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
      endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
      title: 'Meeting overlap',
    },
    {
      startDate: DateTime.fromISO(new Date(now.setHours(8)).toISOString()).toJSDate(),
      endDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
      title: 'Go to a gym',
    },
    {
      startDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
      endDate: DateTime.fromISO(new Date(now.setHours(11)).toISOString()).toJSDate(),
      title: 'Go to Cubiceyes',
    },
    {
      title: 'Birthday of our CEO',
      startDate: DateTime.fromISO(new Date(now.setHours(2)).toISOString()).toJSDate(),
      endDate: DateTime.fromISO(new Date(now.setHours(3)).toISOString()).toJSDate(),
      allDay: true,
      id: 1,
      location: 'Room 1',
    },
    {
      title: 'Birthday of our Dev',
      startDate: DateTime.fromISO(now.toISOString()).toJSDate(),
      endDate: DateTime.fromISO(new Date(now.setHours(3)).toISOString()).toJSDate(),
      allDay: true,
      id: 1,
      location: 'Room 1',
    },
  ];

  return <Calendar currentDate={currentDate} data={schedulerData} />;
};
