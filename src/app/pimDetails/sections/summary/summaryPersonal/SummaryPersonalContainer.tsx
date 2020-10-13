import React from 'react';

import { SummaryPersonal } from './SummaryPersonal';
import { SummaryPersonalContainerProps } from './SummaryPersonal.types';

export const SummaryPersonalContainer = ({ summary, ...props }: SummaryPersonalContainerProps) => {
  return <SummaryPersonal summaryPersonal={summary} {...props} />;
};
