import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AppointmentSearch, useListCalendarLazyQuery } from 'api/types';
import { useNylasAccountState } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { DashboardCalendar } from './DashboardCalendar';

export const DashboardCalendarContainer = () => {
  const { push } = useHistory();
  const { calendarAccounts: nylasAccounts } = useNylasAccountState();
  const [listCalendar, { data: agenda, loading }] = useListCalendarLazyQuery({ fetchPolicy: 'no-cache' });
  const [searchParams, setSearchParams] = useState<AppointmentSearch>();

  useEffect(() => {
    if (nylasAccounts.length) {
      const startDay = new Date();
      const endDay = new Date();
      endDay.setDate(endDay.getDate() + 3);

      setSearchParams({
        accountId: nylasAccounts[0].id || '',
        startDate: startDay.toLocaleDateString(),
        endDate: endDay.toLocaleDateString(),
      });
    }
  }, [nylasAccounts]);

  useEffect(() => {
    const getAppointments = async () => {
      if (nylasAccounts.length && searchParams) {
        listCalendar({
          variables: {
            input: searchParams,
          },
        });
      }
    };

    if (nylasAccounts.length) {
      getAppointments();
    }
  }, [searchParams, nylasAccounts.length, listCalendar]);

  const data =
    agenda?.listCalendar?.map(item => ({
      isAllDay: item.allDay || false,
      startDate: new Date(item.from).toISOString(),
      endDate: new Date(item.to).toISOString(),
      title: item.title || '',
    })) || [];

  return <DashboardCalendar onMoreClick={() => push(AppRoute.calendar)} data={data} loading={loading} />;
};
