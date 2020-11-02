import React from 'react';

import { MarketingCrossSell } from './MarketingCrossSell';
import { MarketingCrossSellContainerProps } from './MarketingCrossSell.types';

export const MarketingCrossSellContainer = (props: MarketingCrossSellContainerProps) => {
  return <MarketingCrossSell {...props} />;
};
