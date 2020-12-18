import { Dispatch, SetStateAction } from 'react';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import { DateTime } from 'luxon';

import { Profile, CalendarGroup, AppointmentType, TaskLabel, NylasAccountItem } from 'api/types';

export type CalendarViewProps = {
  data: AppointmentModel[];
  groups: CalendarGroup[];
  teamMembers: Profile[];
  onFilterChange: Dispatch<SetStateAction<CalendarFilters>>;
  filters: CalendarFilters;
  account?: NylasAccountItem;
};

type FilterCalendarData = DateTime | string | DateTime[] | string[] | boolean | undefined;

export type CalendarFilters = {
  selectedDate: DateTime;
  selectedUser?: string;
  selectedGroup?: string;
  selectedAppointmentType?: AppointmentType;
  selectTaskType: TaskLabel[];
  [key: string]: FilterCalendarData;
};

export type CalendarGroupViewProps = {
  data: AppointmentModel[];
  group?: CalendarGroup;
  currentDate: Date;
  account?: NylasAccountItem;
};
