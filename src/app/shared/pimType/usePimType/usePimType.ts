import { useContext } from 'react';

import { PimTypeContext } from '../pimTypeContext/PimTypeContext';

import { PimType } from '..';

export const usePimType = (): PimType => {
  const pimType = useContext(PimTypeContext);

  if (pimType === undefined) {
    throw new Error('PimTypeContext is unavailable, make sure you are using PimTypeProvider');
  }

  return pimType;
};
