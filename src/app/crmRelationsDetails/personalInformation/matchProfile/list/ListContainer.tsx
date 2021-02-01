import React from 'react';

import { MatchProfileList } from './List';
import { ListContainerProps } from './List.types';

export const MatchProfileListContainer = (props: ListContainerProps) => {
  return <MatchProfileList {...props} />;
};
