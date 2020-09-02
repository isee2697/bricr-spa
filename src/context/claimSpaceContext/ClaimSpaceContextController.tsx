import React, { useReducer, ReactNode, useState } from 'react';

import { ClaimSpaceDispatchContext, ClaimSpaceStateContext } from './ClaimSpaceContext';
import { ClaimSpaceTypes } from './ClaimContext.types';

export const ClaimSpaceContextController = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useState<ClaimSpaceTypes>({
    isClaimed: undefined,
    suggestions: undefined,
    spaceName: undefined,
  });

  return (
    <ClaimSpaceStateContext.Provider value={state}>
      <ClaimSpaceDispatchContext.Provider value={dispatch}>{children}</ClaimSpaceDispatchContext.Provider>
    </ClaimSpaceStateContext.Provider>
  );
};
