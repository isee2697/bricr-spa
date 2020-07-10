import { ReactNode } from 'react';

import { PimType } from '../PimType.types';

export type PimTypeProviderProps = {
  pimType: PimType;
  children: ReactNode;
};
