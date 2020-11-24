import React from 'react';

import { SummaryGeneral } from './SummaryGeneral';
import { SummaryGeneralContainerProps } from './SummaryGeneral.types';

export const SummaryGeneralContainer = ({ summary, ...props }: SummaryGeneralContainerProps) => {
  return <SummaryGeneral summary={summary} {...props} />;
};
