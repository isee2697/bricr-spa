import { Profile, AppointmentLocation } from 'api/types';

export type NewAppointmentProps = {
  locations: AppointmentLocation[];
  members: Profile[];
};
