import React from 'react';

import { Account } from 'app/settings/sections/general/account/account';
import { Company, useGetBillingQuery, useGetCompanyDetailsQuery } from 'api/types';
import { Loader } from 'ui/atoms';

export const AccountContainer = () => {
  const { data } = useGetCompanyDetailsQuery();
  console.log('data?', data);

  if (!data?.getCompanyDetails) {
    return <Loader />;
  }

  return <Account data={data.getCompanyDetails as Company} />;
};
