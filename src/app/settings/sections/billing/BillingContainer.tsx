import React from 'react';
import { useHistory } from 'react-router-dom';

import { Loader } from 'ui/atoms';
import { useGetBillingQuery } from 'api/types';
import { useAuthState } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { Billing } from './Billing';
export const BillingContainer = () => {
  const { hasBillingAccess } = useAuthState();
  const { data } = useGetBillingQuery({ skip: !hasBillingAccess });
  const { push } = useHistory();

  if (!hasBillingAccess) {
    push(AppRoute.settings);
  }

  if (!data?.getBilling?.url) {
    return <Loader />;
  }

  return <Billing billingUrl={data?.getBilling?.url} />;
};
