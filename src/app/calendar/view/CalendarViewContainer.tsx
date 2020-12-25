import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { CalendarFilters, CalendarViewProps } from 'app/calendar/view/CalendarView.types';
import { TaskLabel } from 'api/types';

import { CalendarView } from './CalendarView';

export const CalendarViewContainer = ({
  teamMembers,
  groups,
  account,
}: Pick<CalendarViewProps, 'teamMembers' | 'groups' | 'account'>) => {
  //@Todo when quering selected filters for calendar
  const [filters, setAppliedFilters] = useState<CalendarFilters>({
    selectTaskType: Object.keys(TaskLabel) as TaskLabel[],
    selectedDate: DateTime.local(),
  });

  return (
    <CalendarView
      account={account}
      teamMembers={teamMembers}
      groups={groups}
      filters={filters}
      onFilterChange={setAppliedFilters}
    />
  );
};
