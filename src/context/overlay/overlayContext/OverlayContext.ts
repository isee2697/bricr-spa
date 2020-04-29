import { createContext } from 'react';

import { OverlayStateContextType, OverlayDispatchContextType } from './OverlayContext.types';

export const OverlayStateContext = createContext<OverlayStateContextType | undefined>(undefined);
export const OverlayDispatchContext = createContext<OverlayDispatchContextType | undefined>(undefined);
