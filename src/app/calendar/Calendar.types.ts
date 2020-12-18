import { Profile, CalendarGroup, NylasAccountItem } from 'api/types';

export type CalendarProps = {
  accounts: NylasAccountItem[];
  teamMembers: Profile[];
  groups: CalendarGroup[];
};
