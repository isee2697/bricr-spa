import React from 'react';

import { CostsContainerProps } from './Costs.types';
import { Costs } from './Costs';

export const CostsContainer = (props: CostsContainerProps) => {
  return <Costs {...props} />;
};
