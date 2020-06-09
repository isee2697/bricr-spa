import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Costs } from './Costs';

export const CostsContainer = (props: PimDetailsSectionProps) => {
  return <Costs costs={[]} onSave={() => Promise.resolve(undefined)} {...props} />;
};
