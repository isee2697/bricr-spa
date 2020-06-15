import React from 'react';

import { AutosaveForm } from 'ui/organisms';
import { PimPricingDocument, UpdatePricingInput, useUpdatePricingMutation } from 'api/types';

import { PriceContainerProps } from './Price.types';
import { Price } from './Price';

export const PriceContainer = (props: PriceContainerProps) => {
  const [updatePricing] = useUpdatePricingMutation();

  const handleSave = async (values: UpdatePricingInput) => {
    if (!props.pimId) {
      throw new Error();
    }

    try {
      await updatePricing({
        variables: {
          input: {
            id: props.pimId,
            ...values,
          },
        },
        refetchQueries: [
          {
            query: PimPricingDocument,
            variables: {
              id: props.pimId,
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

  return (
    <AutosaveForm onSave={handleSave} initialValues={{ rent: props.rent, sale: props.sale }}>
      <Price {...props} />
    </AutosaveForm>
  );
};
