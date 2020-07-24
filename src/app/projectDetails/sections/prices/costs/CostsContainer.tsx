import React from 'react';
import { useParams } from 'react-router-dom';

import {
  useNcpPricesCostsQuery,
  useUpdateNcpCostsDetailsMutation,
  useUpdateNcpCostMutation,
  NcpPricesCostsDocument,
  CommonCost,
} from 'api/types';

import { Costs } from './Costs';

export const CostsContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useNcpPricesCostsQuery({ variables: { id } });
  const [updateNcpCostsDetails] = useUpdateNcpCostsDetailsMutation();
  const [updateNcpCost] = useUpdateNcpCostMutation();

  const handleDescriptionSave = async (values: { description: string }) => {
    try {
      const { data } = await updateNcpCostsDetails({
        variables: {
          input: { id, description: values.description },
        },
        refetchQueries: [{ query: NcpPricesCostsDocument, variables: { id } }],
      });

      if (!data?.updateNcpCostsDetails.id) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  const handleUpdateCost = async (values: CommonCost) => {
    try {
      const { data } = await updateNcpCost({
        variables: {
          input: {
            id: values.id,
            serviceCostsFrom: values.serviceCostsFrom,
            serviceCostsTill: values.serviceCostsTill,
            paymentsFrequency: values.paymentsFrequency,
            vatTaxedServiceCostsFrom: values.vatTaxedServiceCostsFrom,
            vatTaxedServiceCostsTill: values.vatTaxedServiceCostsTill,
            vatPercentage: values.vatPercentage,
            notes: values.notes ?? '',
            name: values.name ?? '',
          },
        },
        refetchQueries: [{ query: NcpPricesCostsDocument, variables: { id } }],
      });

      if (!data?.updateNcpCost.id) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data?.getNcpPrices.costs) {
    return null;
  }

  return (
    <Costs data={data.getNcpPrices.costs} onDescriptionSave={handleDescriptionSave} onUpdateCost={handleUpdateCost} />
  );
};
