import React from 'react';

import { ContractsContainerProps } from './Contracts.types';
import { Contracts } from './Contracts';

export const ContractsContainer = (props: ContractsContainerProps) => {
  return <Contracts {...props} />;
};
