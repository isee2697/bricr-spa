import React from 'react';
import { useParams } from 'react-router-dom';

import { UpdateCrmFinancialInput, useGetCrmFinancialQuery, useUpdateCrmFinancialMutation } from 'api/types';
import { Loader } from 'ui/atoms';

import { FinancialProfile } from './FinancialProfile';

export const FinancialProfileContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useGetCrmFinancialQuery({ variables: { id }, fetchPolicy: 'no-cache' });
  const [updateCrmFinancial] = useUpdateCrmFinancialMutation();

  const handleSave = async (values: UpdateCrmFinancialInput) => {
    try {
      const { data: updateResult } = await updateCrmFinancial({
        variables: {
          input: {
            ...values,
            id,
          },
        },
      });

      if (!updateResult || !updateResult.updateCrmFinancial?.id) {
        throw Error();
      }

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  if (loading) {
    return <Loader />;
  }

  return <FinancialProfile data={data?.getCrmFinancial || undefined} onSave={handleSave} />;
};
