import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Investments } from './Investments';

export const InvestmentsContainer = (props: PimDetailsSectionProps) => {
  return <Investments onSave={() => Promise.resolve(undefined)} {...props} />;
};
