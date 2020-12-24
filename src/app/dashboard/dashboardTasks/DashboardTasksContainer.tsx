import React, { useEffect } from 'react';
import { DateTime } from 'luxon';

import { SortDirection, useGetTasksLazyQuery } from 'api/types';
import { useAuthState } from 'hooks';

import { DashboardTasks } from './DashboardTasks';

export const DashboardTasksContainer = () => {
  const { user } = useAuthState();

  const [getTasks, { data }] = useGetTasksLazyQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (user) {
      getTasks({
        variables: {
          deadlines: [
            {
              from: DateTime.local().toISO(),
              to: DateTime.local()
                .endOf('day')
                .toISO(),
            },
          ],
          assignees: [user?.id as string],
          sortColumn: 'title',
          sortDirection: SortDirection.Desc,
        },
      });
    }
  }, [getTasks, user]);

  return <DashboardTasks tasks={data?.getTasks?.items || []} />;
};
