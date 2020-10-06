import React from 'react';
import { DateTime } from 'luxon';

import { PimDetailsSectionProps } from '../../../PimDetails.types';

import { SummaryGeneral } from './SummaryGeneral';
import { PimSummary, PricingAcceptance, PricingPaymentsFrequency } from './SummaryGeneral.types';

export const SummaryGeneralContainer = (props: PimDetailsSectionProps) => {
  const summary: PimSummary = {
    address: 'Isenburgstraat 36 4813 NC Breda NL',
    image: 'https://img.freepik.com/free-photo/light-trails-modern-building_1417-6693.jpg?size=626&ext=jpg',
    pricing: {
      askingPrice: 25000,
      acceptance: PricingAcceptance.InConstruction,
      perDate: DateTime.local(),
      wozValue: 24500,
      referenceDate: DateTime.local(),
      realEstateTaxUser: 675000,
      realEstateTaxUserPaymentsFrequency: PricingPaymentsFrequency.PerYear,
      realEstateTaxBusiness: 1275,
      realEstateTaxBusinessPaymentsFrequency: PricingPaymentsFrequency.PerYear,
    },
  };

  return <SummaryGeneral summary={summary} {...props} />;
};
