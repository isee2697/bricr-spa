import { DateTime } from 'luxon';

import { Profile } from 'api/types';

export type PencilAppointmentResults = {
  dates: PencilAppointmentDate[];
  data: PencilAppointment[];
};

export type PencilAppointmentDate = {
  from: DateTime;
  to: DateTime;
  isFavorite: boolean;
};

export type PencilAppointment = {
  user: Profile;
  checkedDates: number[];
};
