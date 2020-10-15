import React from 'react';

import { Profile, useGetUsersQuery } from 'api/types';

import { NewAppointment } from './NewAppointment';

export const NewAppointmentContainer = () => {
  const { data } = useGetUsersQuery({ variables: { from: 0, isActive: true } });

  return <NewAppointment data={(data?.getAllProfiles?.items as Profile[]) ?? []} />;
};
