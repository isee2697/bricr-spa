import React from 'react';
import { useParams } from 'react-router-dom';

import { PimPricingDocument, useTogglePricingMutation, useUpdatePricingMutation } from 'api/types';
import { PricesGeneral } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral';
import { SetPriceForm } from 'app/pimDetails/sections/prices/setPricesModal/SetPricesModal.types';
import { PricesGeneralContainerProps } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral.types';
import { PriceForm } from 'app/pimDetails/sections/prices/price/Price.types';

export const PricesGeneralContainer = (props: PricesGeneralContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addPricing] = useTogglePricingMutation();
  const [updatePricing] = useUpdatePricingMutation();

  const handleSetPrice = async (values: SetPriceForm) => {
    try {
      await addPricing({
        variables: {
          input: {
            id,
            isRent: values.prices.includes('Rent'),
            isSale: values.prices.includes('Sale'),
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

  const handleSave = async ({
    rent: { isEnabled: isRentEnabled, ...rentRest },
    sale: { isEnabled: isSaleEnabled, ...saleRest },
    description,
  }: PriceForm) => {
    if (!id) {
      throw new Error();
    }

    try {
      await updatePricing({
        variables: {
          input: {
            id,
            rent: rentRest,
            sale: saleRest,
            description,
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

  return (
    <PricesGeneral
      {...props}
      onSetPrice={handleSetPrice}
      onSave={handleSave}
      initialValues={{ rent: props.rent || {}, sale: props.sale || {}, description: props.description }}
    />
  );
};
