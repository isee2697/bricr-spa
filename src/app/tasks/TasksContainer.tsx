import React from 'react';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { useGetMyTeamMembersQuery } from 'api/types';

import { Tasks } from './Tasks';

export const TasksContainer = () => {
  const { isAuthorized } = useAuthState();
  const { loading, data, error } = useGetMyTeamMembersQuery({
    skip: !isAuthorized,
  });

  return <Tasks loading={loading} error={error} data={data} />;
};
