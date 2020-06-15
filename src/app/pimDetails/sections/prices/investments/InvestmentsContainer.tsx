import React from 'react';

import { PimPricingDocument, useUpdateInvestmentMutation } from 'api/types';
import {
  InvestmentForm,
  InvestmentsContainerProps,
} from 'app/pimDetails/sections/prices/investments/Investments.types';

import { Investments } from './Investments';

export const InvestmentsContainer = (props: InvestmentsContainerProps) => {
  const [updateInvestment] = useUpdateInvestmentMutation();

  const handleSave = async ({
    amountOfTenants,
    remainingTermContacts,
    vacancySquareMeters,
    averageVacancyPercentage,
    numberOfRentableUnits,
    ...values
  }: InvestmentForm) => {
    if (!props.pim || !props.pim.id) {
      throw new Error();
    }

    try {
      await updateInvestment({
        variables: {
          input: {
            id: props.pim.id,
            ...values,
            averageVacancyPercentage: parseFloat(averageVacancyPercentage ?? ''),
            numberOfRentableUnits: parseFloat(numberOfRentableUnits ?? ''),
            amountOfTenants: parseInt(amountOfTenants ?? ''),
            remainingTermContacts: parseInt(remainingTermContacts ?? ''),
            vacancySquareMeters: parseInt(vacancySquareMeters ?? ''),
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

  return <Investments onSave={handleSave} {...props} />;
};
