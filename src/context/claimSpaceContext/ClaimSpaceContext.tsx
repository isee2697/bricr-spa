import { createContext } from 'react';

import { ClaimSpaceDispatchContextType, ClaimSpaceTypes } from './ClaimContext.types';

export const ClaimSpaceStateContext = createContext<ClaimSpaceTypes | undefined>(undefined);
export const ClaimSpaceDispatchContext = createContext<ClaimSpaceDispatchContextType | undefined>(undefined);
