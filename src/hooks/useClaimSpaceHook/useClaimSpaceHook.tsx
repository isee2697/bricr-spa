import { useCallback, useContext, useState } from 'react';

import { ClaimSpaceDispatchContext, ClaimSpaceStateContext } from 'context/claimSpaceContext/ClaimSpaceContext';
import { ClaimSpaceTypes } from 'context/claimSpaceContext/ClaimContext.types';

export const useClaimSpaceHook = () => {
  const state = useContext(ClaimSpaceStateContext);
  const dispatch = useContext(ClaimSpaceDispatchContext);

  if (dispatch === undefined) {
    throw new Error('No dispatcher found for claimspace hook');
  }

  if (!state) {
    throw new Error('No state found for claimspace hook');
  }

  return {
    ...state,
    updateClaimSpace: useCallback((data: ClaimSpaceTypes) => dispatch({ ...state, ...data }), [dispatch, state]),
  };
};
