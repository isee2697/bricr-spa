import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { CalendarTypes } from 'api/types';
import { CalendarViewProps, CalendarFilters } from 'app/calendar/view/CalendarView.types';

import { CalendarView } from './CalendarView';

const now = new Date();

const schedulerData = [
  {
    id: 1,
    startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
    title: 'Meeting',
    type: CalendarTypes.Meeting,
  },
  {
    id: 2,
    startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
    title: 'Meeting overlap',
    type: CalendarTypes.Meeting,
  },
  {
    startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
    title: '',
    overlap: true,
    allDay: false,
  },
  {
    id: 3,
    startDate: DateTime.fromISO(new Date(now.setHours(7)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(8)).toISOString()).toJSDate(),
    title: 'Travel to the office',
    type: CalendarTypes.Appointment,
  },
  {
    id: 4,
    startDate: DateTime.fromISO(new Date(now.setHours(8)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    title: 'Go to a gym',
    type: CalendarTypes.Private,
  },
  {
    id: 5,
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
    id: 6,
    location: 'Room 1',
    type: CalendarTypes.Birthday,
  },

  {
    title: 'Birthday of our manager',
    startDate: DateTime.fromISO(now.toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(3)).toISOString()).toJSDate(),
    allDay: true,
    id: 7,
    type: CalendarTypes.Birthday,
    location: 'Room 1',
  },
  {
    title: 'Birthday of our manager 1',
    startDate: DateTime.local()
      .plus({ days: 1, hours: 4 })
      .toJSDate(),
    endDate: DateTime.local()
      .plus({ days: 1, hours: 4, minutes: 5 })
      .toJSDate(),
    allDay: true,
    id: 8,
    type: CalendarTypes.Birthday,
    location: 'Room 4',
  },
  {
    title: 'bday partyyy',
    startDate: DateTime.local()
      .plus({ days: 1, hours: 3 })
      .toJSDate(),
    endDate: DateTime.local()
      .plus({ days: 1, hours: 3, minutes: 5 })
      .toJSDate(),
    id: 9,
    allDay: true,
    type: CalendarTypes.Birthday,
    location: 'Room 1',
  },
  {
    title: 'Appointment',
    startDate: DateTime.local()
      .plus({ days: 1, hours: 1 })
      .toJSDate(),
    endDate: DateTime.local()
      .plus({ days: 1, hours: 1, minutes: 5 })
      .toJSDate(),
    id: 10,
    type: CalendarTypes.Appointment,
    location: 'Room 2',
    allDay: false,
  },
  {
    title: 'Go to client',
    startDate: DateTime.local()
      .plus({ days: 1, hours: 2 })
      .toJSDate(),
    endDate: DateTime.local()
      .plus({ days: 1, hours: 2, minutes: 5 })
      .toJSDate(),
    id: 11,
    allDay: true,
    type: CalendarTypes.Travel,
    location: 'Room 3',
  },
  {
    title: 'Do the dishes',
    startDate: DateTime.fromISO(new Date(now.setHours(2)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(3)).toISOString()).toJSDate(),
    id: 12,
    type: CalendarTypes.Task,
    location: 'Room 2',
  },
  {
    title: 'all day 3 first',
    startDate: DateTime.local()
      .plus({ days: 2, hours: 4 })
      .toJSDate(),
    endDate: DateTime.local()
      .plus({ days: 2, hours: 4, minutes: 5 })
      .toJSDate(),
    allDay: true,
    id: 13,
    type: CalendarTypes.Birthday,
    location: 'Room 4',
  },
  {
    title: 'all day 3second',
    startDate: DateTime.local()
      .plus({ days: 2, hours: 3 })
      .toJSDate(),
    endDate: DateTime.local()
      .plus({ days: 2, hours: 3, minutes: 5 })
      .toJSDate(),
    allDay: true,
    id: 14,
    type: CalendarTypes.Birthday,
    location: 'Room 4',
  },
  {
    title: 'all day 3 thirth',
    startDate: DateTime.local()
      .plus({ days: 2, hours: 2 })
      .toJSDate(),
    endDate: DateTime.local()
      .plus({ days: 2, hours: 2, minutes: 5 })
      .toJSDate(),
    allDay: true,
    id: 15,
    type: CalendarTypes.Birthday,
    location: 'Room 4',
  },
  {
    title: 'all day 3 fourth',
    startDate: DateTime.local()
      .plus({ days: 2, hours: 1 })
      .toJSDate(),
    endDate: DateTime.local()
      .plus({ days: 2, hours: 1, minutes: 5 })
      .toJSDate(),
    allDay: true,
    id: 16,
    type: CalendarTypes.Birthday,
    location: 'Room 4',
  },
];

export const CalendarViewContainer = ({ teamMembers, groups }: Pick<CalendarViewProps, 'teamMembers' | 'groups'>) => {
  //@Todo when quering selected filters for calendar
  const [filters, setAppliedFilters] = useState<CalendarFilters>({ selectedDate: DateTime.local() });

  return (
    <CalendarView
      data={schedulerData}
      teamMembers={teamMembers}
      groups={groups}
      filters={filters}
      onFilterChange={setAppliedFilters}
    />
  );
};
