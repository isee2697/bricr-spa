import { createContext } from 'react';

import { PimType } from '../PimType.types';

export const PimTypeContext = createContext<PimType | undefined>(undefined);
