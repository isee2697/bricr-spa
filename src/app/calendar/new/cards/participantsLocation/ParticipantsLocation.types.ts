import { Profile, AppointmentLocation } from 'api/types';

export enum TravelTime {
  Minutes15 = 'Minutes15',
  Minutes30 = 'Minutes30',
  Minutes45 = 'Minutes45',
  OneHour = 'OneHour',
  OneHour15Minutes = 'OneHour15Minutes',
  OneHour30Minutes = 'OneHour30Minutes',
  OneHour45Minutes = 'OneHour45Minutes',
  TwoHour = 'TwoHour',
  OneHours15Minutes = 'OneHours15Minutes',
  TwoHours30Minutes = 'TwoHours30Minutes',
  TwoHours45Minutes = 'TwoHours45Minutes',
  ThreeHour = 'ThreeHour',
  PlusThreeHour = 'PlusThreeHour',
}

export type ParticipantsLocationProps = {
  members: Profile[];
  locations: AppointmentLocation[];
};
