import { Profile, AppointmentLocation, AddAppointmentInput } from 'api/types';

export type NewAppointmentProps = {
  locations: AppointmentLocation[];
  members: Profile[];
  appointmentInfo?: AddAppointmentInput;
  onSubmit: (appointment: AddAppointmentInput) => Promise<boolean>;
};
