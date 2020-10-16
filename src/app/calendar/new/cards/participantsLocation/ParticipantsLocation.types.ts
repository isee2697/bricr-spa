import { Profile, AppointmentLocation } from 'api/types';

export type ParticipantsLocationProps = {
  members: Profile[];
  locations: AppointmentLocation[];
};
