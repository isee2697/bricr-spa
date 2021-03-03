import React from 'react';

import { MarketingSurveyDetails } from './MarketingSurveyDetails';
import { MarketingSurveyDetailsContainerProps } from './MarketingSurveyDetails.types';

export const MarketingSurveyDetailsContainer = (props: MarketingSurveyDetailsContainerProps) => {
  return <MarketingSurveyDetails {...props} />;
};
