import React from 'react';
import { useParams } from 'react-router-dom';

import { CostContainerProps } from 'app/pimDetails/sections/prices/costs/Costs.types';
import {
  PimPricingDocument,
  SectionWithDescriptionType,
  UpdateCostInput,
  useUpdateCostMutation,
  useUpdateDescriptionMutation,
} from 'api/types';

import { Costs } from './Costs';

export const CostsContainer = (props: CostContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateCost] = useUpdateCostMutation();

  const [updateDescription] = useUpdateDescriptionMutation();

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            ...body,
            pimId: id,
            section: SectionWithDescriptionType.PricesCosts,
          },
        },
        refetchQueries: [
          {
            query: PimPricingDocument,
            variables: {
              id,
            },
          },
        ],
      });

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const handleUpdate = async (values: UpdateCostInput) => {
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
              id,
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

  return <Costs onSave={handleUpdate} {...props} onDescriptionUpdate={onDescriptionUpdate} />;
};
