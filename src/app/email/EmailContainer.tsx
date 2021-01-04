import React, { useEffect } from 'react';

import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { useListNylasAccountLazyQuery } from 'api/types';

import { Email } from './Email';

export const EmailContainer = () => {
  const { formatMessage } = useLocale();

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.email' })} to={AppRoute.email} />
      <NavBreadcrumb title={formatMessage({ id: 'email.list' })} />
    </>
  );
  const [listNylasAccounts, { data: nylasAccountsData }] = useListNylasAccountLazyQuery({ fetchPolicy: 'no-cache' });

  useEffect(() => {
    const getNylasAccounts = () => {
      listNylasAccounts({
        variables: {
          isEmailConnected: true,
        },
      });
    };

    getNylasAccounts();
  }, [listNylasAccounts]);

  const handleAddedNewAccount = () => {
    listNylasAccounts({
      variables: {
        isEmailConnected: true,
      },
    });
  };

  return (
    <Email
      breadcrumbs={breadcrumbs}
      path={AppRoute.email}
      entityType={EntityType.Email}
      accounts={nylasAccountsData?.listNylasAccount || []}
      onAddedNewAccount={handleAddedNewAccount}
    />
  );
};
