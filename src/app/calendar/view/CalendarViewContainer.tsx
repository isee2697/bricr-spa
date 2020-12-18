import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { CalendarFilters, CalendarViewProps } from 'app/calendar/view/CalendarView.types';
import { useListCalendarQuery } from 'api/types';

import { CalendarView } from './CalendarView';
// import { schedulerData } from 'api/mocks/calendar';

export const CalendarViewContainer = ({ teamMembers, groups }: Pick<CalendarViewProps, 'teamMembers' | 'groups'>) => {
  //@Todo when quering selected filters for calendar
  const [filters, setAppliedFilters] = useState<CalendarFilters>({
    selectTaskType: [],
    selectedDate: DateTime.local(),
  });

  // let data = [...schedulerData];
  const { data } = useListCalendarQuery({
    variables: {
      input: {
        startDate: filters.selectedDate.toLocaleString(),
        endDate: filters.selectedDate.toLocaleString(),
      },
    },
  });
  let listCalendar: AppointmentModel[] = [];

  if (filters.selectTaskType.length > 0) {
    listCalendar =
      data?.listCalendar
        ?.filter(appointment => appointment.taskLabel && filters.selectTaskType.includes(appointment.taskLabel))
        .map(appointment => ({
          ...appointment,
          title: appointment.title || '',
          allDay: appointment.allDay || false,
        })) || [];
  }

  return (
    <CalendarView
      data={listCalendar}
      teamMembers={teamMembers}
      groups={groups}
      filters={filters}
      onFilterChange={setAppliedFilters}
    />
  );
};
