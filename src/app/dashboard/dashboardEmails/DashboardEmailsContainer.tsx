import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { Emails } from 'ui/organisms/emails/Emails';
import { useNylasAccountState } from 'hooks';
import { useListEmailLazyQuery } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { EmailFilter } from 'ui/organisms/emails/filters/Filters.types';

export const DashboardEmailsContainer = () => {
  const { push } = useHistory();
  const nylasAccounts = useNylasAccountState().accounts.filter(account => !!account.isEmailConnected);
  const [listEmails, { data, loading: loadingEmails }] = useListEmailLazyQuery({ fetchPolicy: 'no-cache' });
  const [activeFilters, setActiveFilters] = useState<EmailFilter>();

  if (nylasAccounts.length && !activeFilters) {
    setActiveFilters({ inbox: nylasAccounts[0].id });
  }

  useEffect(() => {
    const getEmails = async () => {
      if (activeFilters?.inbox) {
        listEmails({
          variables: {
            accountId: activeFilters.inbox,
            folderId: undefined,
            unread: true,
          },
        });
      }
    };

    getEmails();
  }, [activeFilters, listEmails]);

  const formattedData =
    data?.listEmail?.map(email => ({
      name: email.from.map(item => `${item.name}(${item.email})`).join(', '),
      avatar: '',
      title: email.subject,
      children: email.folder.displayName || '',
      date: new Date(parseInt(email.date) * 1000),
      open: true,
      id: email.id,
    })) || [];

  const handleViewMoreEmail = () => {
    if (!activeFilters?.inbox) {
      push(`${AppRoute.email}/settings`);
    } else if (!data?.listEmail?.length) {
      push(`${AppRoute.email}/inbox/${activeFilters.inbox}`);
    } else {
      push(`${AppRoute.email}/inbox/${activeFilters.inbox}/${data.listEmail[0].folder.id}`);
    }
  };

  const handleSelectEmail = (id: string) => {
    const email = data?.listEmail?.find(item => item.id === id);

    if (activeFilters?.inbox && email) {
      push(`${AppRoute.email}/inbox/${activeFilters?.inbox}/${email.folder.id}/${email.id}`);
    }
  };

  return (
    <Emails
      data={formattedData}
      count={50}
      onMoreClick={handleViewMoreEmail}
      onEmailClick={handleSelectEmail}
      loading={loadingEmails}
      activeFilters={activeFilters}
      onFilter={filters => setActiveFilters(filters)}
    />
  );
};
