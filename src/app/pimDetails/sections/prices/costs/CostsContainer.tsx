import React from 'react';

import { CostContainerProps } from 'app/pimDetails/sections/prices/costs/Costs.types';
import { PimPricingDocument, UpdateCostInput, useUpdateCostMutation } from 'api/types';

import { Costs } from './Costs';

export const CostsContainer = (props: CostContainerProps) => {
  const [updateCost] = useUpdateCostMutation();

  const handleUpdate = async (values: UpdateCostInput) => {
    if (!props.pim || !props.pim.id) {
      throw new Error();
    }

    try {
      await updateCost({
        variables: {
          input: {
            id: values.id,
            serviceCosts: values.serviceCosts,
            paymentsFrequency: values.paymentsFrequency,
            vatTaxedServiceCosts: values.vatTaxedServiceCosts,
            vatPercentage: values.vatPercentage,
            notes: values.notes,
            name: values.name,
          },
        },
        refetchQueries: [
          {
            query: PimPricingDocument,
            variables: {
              id: props.pim.id,
            },
          },
        ],
      });

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return <Costs onSave={handleUpdate} {...props} />;
};
