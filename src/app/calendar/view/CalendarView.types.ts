import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { Profile, CalendarGroup } from 'api/types';

export type CalendarViewProps = {
  data: AppointmentModel[];
  groups: CalendarGroup[];
  teamMembers: Profile[];
};

export type CalendarGroupViewProps = {
  data: AppointmentModel[];
  group: CalendarGroup;
  currentDate: Date;
};
