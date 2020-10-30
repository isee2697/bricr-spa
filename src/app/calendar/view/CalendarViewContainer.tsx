import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { AppointmentState, CalendarTypes, TaskLabel } from 'api/types';
import { CalendarFilters, CalendarViewProps } from 'app/calendar/view/CalendarView.types';

import { CalendarView } from './CalendarView';

const now = new Date();

const dateId26 = DateTime.fromISO(new Date(now.setHours(13)).toISOString());
const schedulerData = [
  {
    id: 1,
    startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
    title: 'Meeting',
    type: CalendarTypes.Appointment,
    state: AppointmentState.Completed,
  },
  {
    id: 2,
    startDate: DateTime.fromISO(new Date(now.setHours(9)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(10)).toISOString()).toJSDate(),
    title: 'Meeting overlap',
    type: CalendarTypes.Appointment,
    state: AppointmentState.Completed,
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
    travelTimeBefore: 45,
    travelTimeAfter: 55,
    type: CalendarTypes.Appointment,
  },
  {
    id: 4,
    startDate: DateTime.fromISO(new Date(now.setHours(5)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(6)).toISOString()).toJSDate(),
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
    taskLabel: TaskLabel.Business,
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
  {
    title: 'main private task!',
    startDate: DateTime.local()
      .minus({ days: 1, hours: 2 })
      .toJSDate(),
    endDate: DateTime.local()
      .minus({ days: 1, hours: 2, minutes: 5 })
      .toJSDate(),
    id: 17,
    type: CalendarTypes.Task,
    taskLabel: TaskLabel.Private,
    location: 'Room 4',
  },
  {
    title: 'follow-up task',
    startDate: DateTime.local()
      .minus({ days: 1 })
      .toJSDate(),
    endDate: DateTime.local()
      .minus({ days: 1, minutes: 35 })
      .toJSDate(),
    id: 18,
    type: CalendarTypes.Task,
    taskLabel: TaskLabel.FollowUp,
    location: 'Room 4',
  },
  {
    title: 'Business task',
    startDate: DateTime.local()
      .minus({ days: 1, hours: 1 })
      .toJSDate(),
    endDate: DateTime.local()
      .minus({ days: 1, hours: 1, minutes: 45 })
      .toJSDate(),
    id: 19,
    type: CalendarTypes.Task,
    taskLabel: TaskLabel.Business,
    location: 'Room 4',
  },
  {
    title: 'Pencil appointment',
    startDate: DateTime.local()
      .minus({ days: 2, hours: 2 })
      .toJSDate(),
    endDate: DateTime.local()
      .minus({ days: 2, hours: 2, minutes: 5 })
      .toJSDate(),
    id: 20,
    type: CalendarTypes.Appointment,
    state: AppointmentState.Pencil,
    location: 'Room 4',
  },
  {
    title: 'Confirmed appointment',
    startDate: DateTime.local()
      .minus({ days: 2 })
      .toJSDate(),
    endDate: DateTime.local()
      .minus({ days: 2, minutes: 35 })
      .toJSDate(),
    id: 21,
    state: AppointmentState.Confirmed,
    type: CalendarTypes.Appointment,

    location: 'Room 4',
  },
  {
    title: 'Unconfirmed',
    startDate: DateTime.local()
      .minus({ days: 2, hours: 1 })
      .toJSDate(),
    endDate: DateTime.local()
      .minus({ days: 2, hours: 1, minutes: 45 })
      .toJSDate(),
    id: 22,
    type: CalendarTypes.Appointment,
    state: AppointmentState.Unconfirmed,
    location: 'Room 4',
  },
  {
    title: 'Completed appointment example',
    startDate: DateTime.local()
      .minus({ days: 2, hours: 3 })
      .toJSDate(),
    endDate: DateTime.local()
      .minus({ days: 2, hours: 3, minutes: 45 })
      .toJSDate(),
    id: 23,
    type: CalendarTypes.Appointment,
    state: AppointmentState.Completed,
  },
  {
    id: 24,
    startDate: DateTime.fromISO(new Date(now.setHours(14)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(15)).toISOString()).toJSDate(),
    title: 'Meeting',
    type: CalendarTypes.Appointment,
    state: AppointmentState.Pencil,
  },
  {
    id: 25,
    startDate: DateTime.fromISO(new Date(now.setHours(12)).toISOString()).toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(13)).toISOString()).toJSDate(),
    title: 'unconfirmed Meeting',
    type: CalendarTypes.Appointment,
    state: AppointmentState.Unconfirmed,
  },
  {
    id: 26,
    startDate: dateId26.toJSDate(),
    endDate: DateTime.fromISO(new Date(now.setHours(14)).toISOString()).toJSDate(),
    title: 'Confirmed appointment ',
    type: CalendarTypes.Appointment,
    state: AppointmentState.Confirmed,
    rRule: `RRULE:FREQ=DAILY;UNTIL=${dateId26
      .plus({ days: 12 })
      .toFormat('yyyyddmm')}T080800Z;COUNT=30;INTERVAL=1;WKST=MO;BYDAY=${dateId26.weekdayShort
      .toUpperCase()
      .substring(0, 2)}`,
  },
];

export const CalendarViewContainer = ({ teamMembers, groups }: Pick<CalendarViewProps, 'teamMembers' | 'groups'>) => {
  //@Todo when quering selected filters for calendar
  const [filters, setAppliedFilters] = useState<CalendarFilters>({
    selectTaskType: [],
    selectedDate: DateTime.local(),
  });
  let data = [...schedulerData];

  if (filters.selectTaskType.length > 0) {
    data = data.filter(appointment => appointment.taskLabel && filters.selectTaskType.includes(appointment.taskLabel));
  }

  return (
    <CalendarView
      data={data}
      teamMembers={teamMembers}
      groups={groups}
      filters={filters}
      onFilterChange={setAppliedFilters}
    />
  );
};
