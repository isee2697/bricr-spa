import React from 'react';
import { DateTime } from 'luxon';

import { palette } from 'theme/palette';

import { Calendar } from './Calendar';

enum CalendarTypes {
  Meeting = 'Meeting',
  Appointment = 'Appointment',
  Birthday = 'Birthday',
  Travel = 'Travel',
  Private = 'Private',
  Task = 'Task',
}

const now = new Date();

const schedulerData = [
  {
    startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
    title: 'Meeting',
    type: CalendarTypes.Meeting,
  },
  {
    startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
    title: 'Meeting overlap',
    type: CalendarTypes.Meeting,
  },
  {
    startDate: DateTime.fromISO(new Date(now.setHours(8)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    title: 'Go to a gym',
    type: CalendarTypes.Private,
  },
  {
    startDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(11)).toISOString()).toJSDate(),
    title: 'Go to Cubiceyes',
    type: CalendarTypes.Travel,
  },
  {
    title: 'Birthday of our CEO',
    startDate: DateTime.fromISO(new Date(now.setHours(2)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(3)).toISOString()).toJSDate(),
    allDay: true,
    id: 1,
    location: 'Room 1',
    type: CalendarTypes.Birthday,
  },
  {
    title: 'Birthday of our Dev',
    startDate: DateTime.fromISO(now.toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(3)).toISOString()).toJSDate(),
    allDay: true,
    id: 1,
    type: CalendarTypes.Birthday,
    location: 'Room 1',
  },
];

const CalendarResources = [
  {
    id: 1,
    text: CalendarTypes.Meeting,
    color: palette.blue.main,
  },
  {
    id: 2,
    text: CalendarTypes.Appointment,
    color: palette.green.main,
  },
  {
    id: 3,
    text: CalendarTypes.Birthday,
    color: palette.orange.main,
  },
  {
    id: 4,
    text: CalendarTypes.Travel,
    color: palette.purple.main,
  },
  {
    id: 5,
    text: CalendarTypes.Private,
    color: palette.red.main,
  },
  {
    id: 6,
    text: CalendarTypes.Task,
    color: palette.orange.main,
  },
];
export const CalendarContainer = () => {
  const currentDate = now;

  const data = schedulerData.map(item => ({
    ...item,
    type: CalendarResources.find(type => type.text === item.type)?.id,
  }));

  return (
    <Calendar
      resources={[{ fieldName: 'type', title: 'type', instances: CalendarResources }]}
      currentDate={currentDate}
      data={data}
    />
  );
};
