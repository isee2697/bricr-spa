import React, { useReducer } from 'react';

import { NylasAccountDispatchContext, NylasAccountStateContext } from '../nylasAccountContext/NylasAccountContext';
import { nylasAccountReducer } from '../nylasAccountReducer/nylasAccountReducer';

import { NylasAccountContextControllerProps } from './NylasAccountContextController.types';

export const NylasAccountContextController = ({ children }: NylasAccountContextControllerProps) => {
  const [state, dispatch] = useReducer(nylasAccountReducer, {
    calendarAccounts: [],
    emailAccounts: [],
  });

  return (
    <NylasAccountStateContext.Provider value={state}>
      <NylasAccountDispatchContext.Provider value={dispatch}>{children}</NylasAccountDispatchContext.Provider>
    </NylasAccountStateContext.Provider>
  );
};
