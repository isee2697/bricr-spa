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

  // const laterToday = new Date();
  // laterToday.setHours(laterToday.getHours() + 2);
  // const tomorrow = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);
  // const future = new Date();
  // future.setDate(future.getDate() + 2);

  const data =
    agenda?.listCalendar?.map(item => ({
      isAllDay: item.allDay || false,
      startDate: new Date(item.from).toISOString(),
      endDate: new Date(item.to).toISOString(),
      title: item.title || '',
    })) || [];

  // const data = [
  //   {
  //     isAllDay: false,
  //     startDate: future.toISOString(),
  //     endDate: future.toISOString(),
  //     title: 'My Future appointment',
  //   },
  //   {
  //     isAllDay: false,
  //     startDate: new Date().toISOString(),
  //     endDate: laterToday.toISOString(),
  //     title: 'My Today appointment',
  //   },
  //   {
  //     isAllDay: false,
  //     startDate: new Date().toISOString(),
  //     endDate: laterToday.toISOString(),
  //     title: 'My Second Today appointment',
  //   },
  //   {
  //     isAllDay: false,
  //     startDate: new Date().toISOString(),
  //     endDate: laterToday.toISOString(),
  //     title: 'My Thirth Today appointment',
  //   },
  //   {
  //     isAllDay: false,
  //     startDate: tomorrow.toISOString(),
  //     endDate: tomorrow.toISOString(),
  //     title: 'My Tomorrow appointment',
  //   },
  //   {
  //     isAllDay: false,
  //     startDate: tomorrow.toISOString(),
  //     endDate: tomorrow.toISOString(),
  //     title: 'My Tomorrow appointment 2',
  //   },
  // ];

  return <DashboardCalendar onMoreClick={() => push(AppRoute.calendar)} data={data} />;
};
