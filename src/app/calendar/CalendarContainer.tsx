import React from 'react';

import { Profile, useGetUsersQuery, CalendarGroup } from 'api/types';
import { palette } from 'theme/palette';
import { useNylasAccountState } from 'hooks';

import { Calendar } from './Calendar';

const calendarGroups: CalendarGroup[] = [
  {
    id: 'randomId1',
    name: 'MyCalendar',
    color: palette.red.main,
  },
  {
    id: 'randomID2',
    name: 'Brokers',
    color: palette.blue.main,
  },
  {
    id: 'randomID3',
    name: 'Management',
    color: palette.purple.main,
  },
];

export const CalendarContainer = () => {
  const { data } = useGetUsersQuery({ variables: { from: 0, isActive: true } });

  const profiles = (data?.getAllProfiles.items as Profile[]) ?? [];
  const { calendarAccounts: accounts } = useNylasAccountState();

  calendarGroups[0].members = profiles;
  calendarGroups[1].members = profiles.length ? profiles.slice(0, Math.round(profiles.length / 2)) : null;

  return <Calendar groups={calendarGroups} teamMembers={profiles} accounts={accounts} />;
};
