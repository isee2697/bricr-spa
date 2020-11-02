import React from 'react';

import { MarketingNewLetter } from './MarketingNewLetter';
import { MarketingNewLetterContainerProps } from './MarketingNewLetter.types';

export const MarketingNewLetterContainer = (props: MarketingNewLetterContainerProps) => {
  return <MarketingNewLetter {...props} />;
};
