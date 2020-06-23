import React from 'react';
import { useParams } from 'react-router-dom';

import { PimPricingDocument, useUpdateInvestmentMutation } from 'api/types';
import {
  InvestmentForm,
  InvestmentsContainerProps,
} from 'app/pimDetails/sections/prices/investments/Investments.types';

import { Investments } from './Investments';

export const InvestmentsContainer = (props: InvestmentsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateInvestment] = useUpdateInvestmentMutation();

  const handleSave = async ({
    amountOfTenants,
    remainingTermContacts,
    vacancySquareMeters,
    averageVacancyPercentage,
    numberOfRentableUnits,
    ...values
  }: InvestmentForm) => {
    try {
      await updateInvestment({
        variables: {
          input: {
            id,
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

  return <Investments onSave={handleSave} {...props} />;
};
