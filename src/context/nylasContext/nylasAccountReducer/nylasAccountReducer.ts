import { NylasAccountStateContextType } from '../nylasAccountContext/NylasAccountContext.types';

import { NylasAccountAction } from './nylasAccountReducer.types';

export const SET_NYLAS_ACCOUNTS = 'nylas/set-accounts';

export const nylasAccountReducer: (
  state: NylasAccountStateContextType,
  action: NylasAccountAction,
) => NylasAccountStateContextType = (state, action) => {
  const behaviours: Record<
    string,
    (state: NylasAccountStateContextType, action: NylasAccountAction) => NylasAccountStateContextType
  > = {
    [SET_NYLAS_ACCOUNTS]: state => ({
      ...state,
      accounts: action.accounts,
    }),
  };

  if (!behaviours[action.type]) {
    throw new Error(`Unhandled action type: ${action.type}`);
  }

  return behaviours[action.type](state, action);
};
