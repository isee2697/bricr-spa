import { createContext } from 'react';

import { NylasAccountDispatchContextType, NylasAccountStateContextType } from './NylasAccountContext.types';

export const NylasAccountStateContext = createContext<NylasAccountStateContextType | undefined>(undefined);
export const NylasAccountDispatchContext = createContext<NylasAccountDispatchContextType | undefined>(undefined);
