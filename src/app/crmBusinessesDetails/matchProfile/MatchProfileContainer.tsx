import React from 'react';

import { MatchProfileContainerProps } from './MatchProfile.types';
import { MatchProfile } from './MatchProfile';

export const MatchProfileContainer = (props: MatchProfileContainerProps) => {
  return <MatchProfile {...props} />;
};
