import { createContext } from 'react';

import { LayoutDispatchContextType, LayoutStateContextType } from './LayoutContext.types';

export const LayoutStateContext = createContext<LayoutStateContextType | undefined>(undefined);
export const LayoutDispatchContext = createContext<LayoutDispatchContextType | undefined>(undefined);
