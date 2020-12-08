import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { CalendarFilters, CalendarViewProps } from 'app/calendar/view/CalendarView.types';
import { schedulerData } from 'api/mocks/calendar';

import { CalendarView } from './CalendarView';

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
