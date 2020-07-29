import React from 'react';
import { useParams } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';

import {
  useNcpPricesPricingQuery,
  useToggleNcpPricingMutation,
  useUpdateNcpPricingMutation,
  NcpPricesPricingDocument,
  UpdateNcpPricingInput,
} from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { PriceType } from './PricesGeneral.types';
import { PricesGeneral } from './PricesGeneral';

export const PricesGeneralContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useNcpPricesPricingQuery({ variables: { id } });
  const [toggleNcpPricing] = useToggleNcpPricingMutation();
  const [updateNcpPricing] = useUpdateNcpPricingMutation();

  const handleSetPrice = async (newTypes: { prices: PriceType[] }) => {
    try {
      const { data } = await toggleNcpPricing({
        variables: {
          input: {
            id,
            isSale: newTypes.prices.includes('Sale'),
            isRent: newTypes.prices.includes('Rent'),
          },
        },
        refetchQueries: [{ query: NcpPricesPricingDocument, variables: { id } }],
      });

      if (!data?.toggleNcpPricing.id) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  const handleSave = async (values: UpdateNcpPricingInput) => {
    try {
      const { data } = await updateNcpPricing({
        variables: {
          input: {
            id,
            description: values.description,
            sale: {
              minPrice: values.sale?.minPrice,
              maxPrice: values.sale?.maxPrice,
              calculateAutomatically: values.sale?.calculateAutomatically,
            },
            rent: {
              minPrice: values.rent?.minPrice,
              maxPrice: values.rent?.maxPrice,
              calculateAutomatically: values.rent?.calculateAutomatically,
            },
          },
        },
        refetchQueries: [{ query: NcpPricesPricingDocument, variables: { id } }],
      });

      if (!data?.updateNcpPricing.id) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data?.getNcpPrices) {
    return null;
  }

  return (
    <AutosaveForm initialValues={data.getNcpPrices.pricing ?? {}} onSave={handleSave} mutators={{ ...arrayMutators }}>
      <PricesGeneral
        types={
          [
            data.getNcpPrices.pricing?.sale?.isEnabled && 'Sale',
            data.getNcpPrices.pricing?.rent?.isEnabled && 'Rent',
          ].filter(Boolean) as PriceType[]
        }
        dateUpdated={data.getNcpPrices.pricing?.dateUpdated}
        updatedBy={data.getNcpPrices.pricing?.lastEditedBy}
        onSetPrice={handleSetPrice}
      />
    </AutosaveForm>
  );
};
