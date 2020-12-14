import React from 'react';
import { useHistory } from 'react-router-dom';

import { Company, UpdateCompanyInput, useGetCompanyDetailsQuery, useUpdateCompanyDetailsMutation } from 'api/types';
import { Loader } from 'ui/atoms';
import { useAuthState } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { Account } from './Account';

export const AccountContainer = () => {
  const { user } = useAuthState();
  const { push } = useHistory();
  const { data, refetch } = useGetCompanyDetailsQuery({ skip: !user?.isAdmin });
  const [updateCompany] = useUpdateCompanyDetailsMutation();

  if (!user?.isAdmin) {
    push(AppRoute.settings);
  }

  if (!data?.getCompanyDetails) {
    return <Loader />;
  }

  const handleSave = async (update: UpdateCompanyInput & Company) => {
    try {
      const response = await updateCompany({
        variables: {
          input: {
            id: data.getCompanyDetails.id,
            address: update.address,
            addressSecondLine: update.addressSecondLine,
            name: update.name,
            state: update.state,
            city: update.city,
            zipcode: update.zipcode,
            country: update.country,
            houseNumber: update.houseNumber,
            floor: update.floor,
            chamberOfCommerce: update.chamberOfCommerce,
            vat: update.vat,
            imageId: update.image?.id ?? null,
          },
        },
      });

      if (response.data) {
        refetch();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <Account onSave={handleSave} data={data.getCompanyDetails as Company} />;
};
