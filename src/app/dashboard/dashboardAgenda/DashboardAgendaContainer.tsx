import React, { useEffect, useMemo } from 'react';

import { AppointmentSearch, SortDirection, useGetTasksLazyQuery, useListCalendarQuery } from 'api/types';
import { useAuthState, useNylasAccountState } from 'hooks';

import { DashboardAgenda } from './DashboardAgenda';

export const DashboardAgendaContainer = () => {
  const { user } = useAuthState();
  const { accounts: nylasAccounts } = useNylasAccountState();

  const [getTasks, { data: tasks }] = useGetTasksLazyQuery({
    fetchPolicy: 'network-only',
  });

  const searchParams: AppointmentSearch = useMemo(
    () => ({
      accountId: nylasAccounts?.[0]?.id || '',
      startDate: new Date().toLocaleDateString(),
      endDate: new Date(Date.now() + 3 * 24 * 3600 * 1000).toLocaleDateString(),
    }),
    [nylasAccounts],
  );
  const { data: agenda } = useListCalendarQuery({
    variables: {
      input: searchParams,
    },
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

  return <DashboardAgenda tasks={tasks?.getTasks?.items || []} agenda={agenda?.listCalendar || []} />;
};
