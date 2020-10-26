import { Dispatch, SetStateAction } from 'react';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import { DateTime } from 'luxon';

import { Profile, CalendarGroup, AppointmentType } from 'api/types';

export type CalendarViewProps = {
  data: AppointmentModel[];
  groups: CalendarGroup[];
  teamMembers: Profile[];
  onFilterChange: Dispatch<SetStateAction<CalendarFilters>>;
  filters: CalendarFilters;
};

type FilterCalendarData = DateTime | string | DateTime[] | string[] | undefined;

export type CalendarFilters = {
  selectedDate: DateTime;
  selectedUser?: string;
  selectedGroup?: string;
  selectedAppointmentType?: AppointmentType;
  [key: string]: FilterCalendarData;
};

export type CalendarGroupViewProps = {
  data: AppointmentModel[];
  group?: CalendarGroup;
  currentDate: Date;
};
