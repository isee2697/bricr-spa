import React from 'react';

import { PimPricingDocument, useTogglePricingMutation } from 'api/types';
import { PricesGeneral } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral';
import { SetPriceForm } from 'app/pimDetails/sections/prices/setPricesModal/SetPricesModal.types';
import { PricesGeneralContainerProps } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral.types';

export const PricesGeneralContainer = (props: PricesGeneralContainerProps) => {
  const [addPricing] = useTogglePricingMutation();

  const handleSave = async (values: SetPriceForm) => {
    try {
      if (!props.pim || !props.pim.id) {
        throw new Error();
      }

      await addPricing({
        variables: {
          input: {
            id: props.pim.id,
            isRent: values.prices.includes('Rent'),
            isSale: values.prices.includes('Sale'),
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

  return <PricesGeneral {...props} onSave={handleSave} />;
};
