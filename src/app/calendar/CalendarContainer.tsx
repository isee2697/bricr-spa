import React from 'react';

import { Profile, useGetUsersQuery, CalendarGroup } from 'api/types';
import { palette } from 'theme/palette';

import { Calendar } from './Calendar';

const calendarGroups: CalendarGroup[] = [
  {
    id: 'randomId1',
    name: 'Brokers',
    color: palette.red.main,
  },
  {
    id: 'randomID2',
    name: 'Marketeers',
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

  calendarGroups[0].members = profiles;

  return <Calendar groups={calendarGroups} data={profiles} />;
};
