import React from 'react';
import { PimDetailsSectionProps } from '../../../PimDetails.types';

import { SummaryInside } from './SummaryInside';
import { PimSummaryInside } from './SummaryInside.types';

export const SummaryInsideContainer = (props: PimDetailsSectionProps) => {
  const summary: PimSummaryInside = {
    address: 'Isenburgstraat 36 4813 NC Breda NL',
    image: 'https://img.freepik.com/free-photo/light-trails-modern-building_1417-6693.jpg?size=626&ext=jpg',
  };

  return <SummaryInside summaryInside={summary} {...props} />;
};
