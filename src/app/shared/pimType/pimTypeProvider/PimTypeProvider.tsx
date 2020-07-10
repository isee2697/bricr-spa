import React from 'react';

import { PimTypeContext } from '../pimTypeContext/PimTypeContext';

import { PimTypeProviderProps } from './PimTypeProvider.types';

export const PimTypeProvider = ({ pimType, children }: PimTypeProviderProps) => {
  return <PimTypeContext.Provider value={pimType}>{children}</PimTypeContext.Provider>;
};
