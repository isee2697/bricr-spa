import React from 'react';

import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale, useNylasAccountState } from 'hooks';

import { Email } from './Email';

export const EmailContainer = () => {
  const { formatMessage } = useLocale();

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.email' })} to={AppRoute.email} />
      <NavBreadcrumb title={formatMessage({ id: 'email.list' })} />
    </>
  );
  const nylasAccountsData = useNylasAccountState().accounts.filter(account => !!account.isEmailConnected);

  return (
    <Email
      breadcrumbs={breadcrumbs}
      path={AppRoute.email}
      entityType={EntityType.Email}
      accounts={nylasAccountsData || []}
    />
  );
};

export default EmailContainer;
