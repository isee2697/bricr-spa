import React from 'react';

import { MarketingTargetGroups } from './MarketingTargetGroups';
import { MarketingTargetGroupsContainerProps } from './MarketingTargetGroups.types';

export const MarketingTargetGroupsContainer = (props: MarketingTargetGroupsContainerProps) => {
  return <MarketingTargetGroups {...props} />;
};
