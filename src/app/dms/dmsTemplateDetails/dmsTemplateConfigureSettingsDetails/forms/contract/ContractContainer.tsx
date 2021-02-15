import React from 'react';

import { Contract } from './Contract';
import { ContractContainerProps } from './Contract.types';

export const ContractContainer = ({ template }: ContractContainerProps) => {
  return <Contract template={template} />;
};
