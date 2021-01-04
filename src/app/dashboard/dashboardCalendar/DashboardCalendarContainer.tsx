import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { AppointmentSearch, useListCalendarQuery } from 'api/types';
import { useNylasAccountState } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { DashboardCalendar } from './DashboardCalendar';

export const DashboardCalendarContainer = () => {
  const { push } = useHistory();
  const { accounts: nylasAccounts } = useNylasAccountState();

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
    fetchPolicy: 'no-cache',
  });

  const data =
    agenda?.listCalendar?.map(item => ({
      isAllDay: item.allDay || false,
      startDate: new Date(item.from).toISOString(),
      endDate: new Date(item.to).toISOString(),
      title: item.title || '',
    })) || [];

  return <DashboardCalendar onMoreClick={() => push(AppRoute.calendar)} data={data} />;
};
