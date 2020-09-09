import React from 'react';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { useGetMyTeamMembersQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { Tasks } from './Tasks';

export const TasksContainer = () => {
  const { isAuthorized, user } = useAuthState();
  const { loading, data, error } = useGetMyTeamMembersQuery({
    skip: !isAuthorized,
  });

  if (!isAuthorized || !user || loading || !data) {
    return <Loader />;
  }

  return <Tasks user={user} error={error} data={data} />;
};
