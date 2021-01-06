import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { Emails } from 'ui/organisms/emails/Emails';
import { useNylasAccountState } from 'hooks';
import { useListEmailLazyQuery } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

export const DashboardEmailsContainer = () => {
  const { push } = useHistory();
  const { emailAccounts: nylasAccounts } = useNylasAccountState();
  const [listEmails, { data, loading: loadingEmails }] = useListEmailLazyQuery({ fetchPolicy: 'no-cache' });

  useEffect(() => {
    const getEmails = async () => {
      listEmails({
        variables: {
          accountId: nylasAccounts[0].id,
          folderId: undefined,
          unread: true,
        },
      });
    };

    if (nylasAccounts.length) {
      getEmails();
    }
  }, [listEmails, nylasAccounts]);

  const formattedData =
    data?.listEmail?.map(email => ({
      name: email.from.map(item => `${item.name}(${item.email})`).join(', '),
      avatar: '',
      title: email.subject,
      children: email.folder.displayName || '',
      date: new Date(email.date),
      open: true,
      id: email.id,
    })) || [];

  const handleAddEmail = () => {
    if (!nylasAccounts.length) {
      push(`${AppRoute.email}/settings`);
    } else if (!data?.listEmail?.length) {
      push(`${AppRoute.email}/inbox/${nylasAccounts[0].id}`);
    } else {
      push(`${AppRoute.email}/inbox/${nylasAccounts[0].id}/${data.listEmail[0].folder.id}`);
    }
  };

  const handleViewMoreEmail = () => {
    if (!nylasAccounts.length) {
      push(`${AppRoute.email}/settings`);
    } else if (!data?.listEmail?.length) {
      push(`${AppRoute.email}/inbox/${nylasAccounts[0].id}`);
    } else {
      push(`${AppRoute.email}/inbox/${nylasAccounts[0].id}/${data.listEmail[0].folder.id}`);
    }
  };

  const handleSelectEmail = (id: string) => {
    const email = data?.listEmail?.find(item => item.id === id);

    if (email) {
      push(`${AppRoute.email}/inbox/${nylasAccounts[0].id}/${email.folder.id}/${email.id}`);
    }
  };

  return (
    <Emails
      data={formattedData}
      count={50}
      onAddClick={handleAddEmail}
      onMoreClick={handleViewMoreEmail}
      onEmailClick={handleSelectEmail}
      loading={loadingEmails}
    />
  );
};
