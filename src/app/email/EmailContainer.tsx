import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useListEmailFoldersQuery, useListNylasAccountLazyQuery } from 'api/types';

import { Email } from './Email';

export const EmailContainer = () => {
  const { formatMessage } = useLocale();
  const urlParams = useParams();

  const breadcrumbs = (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'header.links.email' })}
        to={joinUrlParams(AppRoute.email, urlParams)}
      />
      <NavBreadcrumb title={formatMessage({ id: 'email.list' })} />
    </>
  );

  const { data } = useListEmailFoldersQuery({ fetchPolicy: 'no-cache' });
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
      folders={data?.listEmailFolders || []}
      onAddedNewAccount={handleAddedNewAccount}
    />
  );
};
