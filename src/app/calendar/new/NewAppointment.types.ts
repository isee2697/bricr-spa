import { Profile, AppointmentLocation, Appointment, AddAppointmentInput, NylasAccountItem } from 'api/types';

export type NewAppointmentContainerProps = {
  teamMembers: Profile[];
  account?: NylasAccountItem;
  isEdit?: boolean;
};

export type NewAppointmentProps = {
  locations: AppointmentLocation[];
  members: Profile[];
  appointmentInfo?: AppointmentFormType;
  onSubmit: (appointment: AddAppointmentInput) => Promise<boolean>;
  loading?: boolean;
};

export type AppointmentTermFormType = {
  from: {
    date: string;
    time: string;
  };
  to: {
    date: string;
    time: string;
  };
};

export type AppointmentFormType = Omit<Partial<Appointment>, 'from' | 'to'> & {
  from: {
    date: string;
    time: string;
  };
  to: {
    date: string;
    time: string;
  };
  alternativeTerms?: [AppointmentTermFormType];
};
