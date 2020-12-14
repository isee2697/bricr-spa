import { Profile, AppointmentLocation, CalendarTypes, AppointmentState, TaskLabel } from 'api/types';

export type NewAppointmentProps = {
  locations: AppointmentLocation[];
  members: Profile[];
  appointmentInfo?: Appointment;
};

export type Appointment = {
  id: number;
  startDate: Date;
  endDate: Date;
  title: string;
  type: CalendarTypes;
  state?: AppointmentState;
  overlap?: boolean;
  allDay?: boolean;
  travelTimeBefore?: number;
  travelTimeAfter?: number;
  location?: string;
  taskLabel?: TaskLabel;
  rRule?: string;
};
