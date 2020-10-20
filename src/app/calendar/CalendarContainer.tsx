import React from 'react';

import { Profile, useGetUsersQuery } from 'api/types';

import { Calendar } from './Calendar';

export const CalendarContainer = () => {
  const { data } = useGetUsersQuery({ variables: { from: 0, isActive: true } });

  return <Calendar data={(data?.getAllProfiles.items as Profile[]) ?? []} />;
};
