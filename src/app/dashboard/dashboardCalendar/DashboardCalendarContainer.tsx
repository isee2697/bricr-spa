import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AppointmentSearch, useListCalendarQuery } from 'api/types';
import { useNylasAccountState } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { DashboardCalendar } from './DashboardCalendar';

export const DashboardCalendarContainer = () => {
  const { push } = useHistory();
  const nylasAccounts = useNylasAccountState().accounts.filter(account => !!account.isCalendarConnected);
  const [searchParams, setSearchParams] = useState<AppointmentSearch>();
  const { data: agenda, loading } = useListCalendarQuery({
    fetchPolicy: 'no-cache',
    skip: !searchParams,
    variables: { input: searchParams || { accountId: '', startDate: '', endDate: '' } },
  });

  if (nylasAccounts.length && !searchParams) {
    const startDay = new Date();
    const endDay = new Date();
    endDay.setDate(endDay.getDate() + 3);

    setSearchParams({
      accountId: nylasAccounts[0].id || '',
      startDate: startDay.toLocaleDateString(),
      endDate: endDay.toLocaleDateString(),
    });
  }

  const data =
    agenda?.listCalendar?.map(item => ({
      isAllDay: item.allDay || false,
      startDate: new Date(item.from).toISOString(),
      endDate: new Date(item.to).toISOString(),
      title: item.title || '',
    })) || [];

  return <DashboardCalendar onMoreClick={() => push(AppRoute.calendar)} data={data} loading={loading} />;
};
