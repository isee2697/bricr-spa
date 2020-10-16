import React from 'react';

import { Profile, useGetUsersQuery, AppointmentLocation } from 'api/types';

import { NewAppointment } from './NewAppointment';

const locations: AppointmentLocation[] = [
  {
    id: 'Loc1',
    name: 'White room',
    availableSeats: 8,
    suggest: true,
  },
  {
    id: 'Loc2',
    name: 'Green room',
    availableSeats: 8,
  },
  {
    id: 'Loc3',
    name: 'Red room',
    availableSeats: 8,
    suggest: true,
  },
  {
    id: 'Loc4',
    name: 'Blue room',
    availableSeats: 8,
  },
  {
    id: 'Loc5',
    name: 'Purple room',
    availableSeats: 8,
  },
  {
    id: 'Loc6',
    name: 'Dark room',
    availableSeats: 8,
    suggest: true,
  },
];

export const NewAppointmentContainer = () => {
  const { data } = useGetUsersQuery({ variables: { from: 0, isActive: true } });

  return <NewAppointment locations={locations} members={(data?.getAllProfiles?.items as Profile[]) ?? []} />;
};
