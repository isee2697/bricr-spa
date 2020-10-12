import React from 'react';

import { PimDetailsSectionProps } from '../../../PimDetails.types';

import { SummaryOutside } from './SummaryOutside';
import { PimSummaryOutside } from './SummaryOutside.types';

export const SummaryOutsideContainer = (props: PimDetailsSectionProps) => {
  const summary: PimSummaryOutside = {
    address: 'Isenburgstraat 36 4813 NC Breda NL',
    image: 'https://img.freepik.com/free-photo/light-trails-modern-building_1417-6693.jpg?size=626&ext=jpg',
  };

  return <SummaryOutside summaryOutside={summary} {...props} />;
};
