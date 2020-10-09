import React from 'react';

import { PimDetailsSectionProps } from '../../../PimDetails.types';

import { SummaryPersonal } from './SummaryPersonal';
import { PimSummaryPersonal } from './SummaryPersonal.types';

export const SummaryPersonalContainer = (props: PimDetailsSectionProps) => {
  const summary: PimSummaryPersonal = {
    address: 'Isenburgstraat 36 4813 NC Breda NL',
    image: 'https://img.freepik.com/free-photo/light-trails-modern-building_1417-6693.jpg?size=626&ext=jpg',
  };

  return <SummaryPersonal summaryPersonal={summary} {...props} />;
};
