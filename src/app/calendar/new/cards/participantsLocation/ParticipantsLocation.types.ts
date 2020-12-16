import { Profile, AppointmentLocation } from 'api/types';

export enum TravelTime {
  Minutes15 = 15,
  Minutes30 = 30,
  Minutes45 = 45,
  OneHour = 60,
  OneHour15Minutes = 75,
  OneHour30Minutes = 90,
  OneHour45Minutes = 105,
  TwoHour = 120,
  TwoHours15Minutes = 135,
  TwoHours30Minutes = 150,
  TwoHours45Minutes = 165,
  ThreeHour = 180,
  PlusThreeHour = 200,
}

export type ParticipantsLocationProps = {
  members: Profile[];
  locations: AppointmentLocation[];
};
