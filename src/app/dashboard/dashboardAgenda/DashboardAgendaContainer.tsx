import React, { useEffect } from 'react';

import { SortDirection, useGetTasksLazyQuery } from 'api/types';
import { useAuthState } from 'hooks';

import { DashboardAgenda } from './DashboardAgenda';

export const DashboardAgendaContainer = () => {
  const { user } = useAuthState();

  const [getTasks, { data }] = useGetTasksLazyQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (user) {
      getTasks({
        variables: {
          assignees: [user?.id as string],
          sortColumn: 'title',
          sortDirection: SortDirection.Desc,
        },
      });
    }
  }, [getTasks, user]);

  return <DashboardAgenda tasks={data?.getTasks?.items || []} />;
};
