import React, { useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { CalendarFilters, CalendarViewProps } from 'app/calendar/view/CalendarView.types';
import { AppointmentSearch, useListCalendarQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { CalendarView } from './CalendarView';

export const CalendarViewContainer = ({
  teamMembers,
  groups,
  account,
}: Pick<CalendarViewProps, 'teamMembers' | 'groups' | 'account'>) => {
  //@Todo when quering selected filters for calendar
  const [filters, setAppliedFilters] = useState<CalendarFilters>({
    selectTaskType: [],
    selectedDate: DateTime.local(),
  });
  const searchParams: AppointmentSearch = useMemo(
    () => ({
      accountId: account?.id || '',
      startDate: filters.selectedDate.toLocaleString(),
      endDate: filters.selectedDate.toLocaleString(),
    }),
    [account, filters],
  );
  console.log(searchParams);

  const { data } = useListCalendarQuery({
    variables: {
      input: searchParams,
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
          startDate: appointment.from,
          endDate: appointment.to,
        })) || [];
  }

  if (!listCalendar) {
    return <Loader />;
  }

  return (
    <CalendarView
      account={account}
      data={listCalendar}
      teamMembers={teamMembers}
      groups={groups}
      filters={filters}
      onFilterChange={setAppliedFilters}
    />
  );
};
