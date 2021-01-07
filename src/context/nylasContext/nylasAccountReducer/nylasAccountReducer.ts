import { NylasAccountStateContextType } from '../nylasAccountContext/NylasAccountContext.types';

import { NylasAccountAction } from './nylasAccountReducer.types';

export const SET_NYLAS_CALENDAR_ACCOUNTS = 'nylas/set-calendar-accounts';
export const SET_NYLAS_EMAIL_ACCOUNTS = 'nylas/set-email-accounts';

export const nylasAccountReducer: (
  state: NylasAccountStateContextType,
  action: NylasAccountAction,
) => NylasAccountStateContextType = (state, action) => {
  const behaviours: Record<
    string,
    (state: NylasAccountStateContextType, action: NylasAccountAction) => NylasAccountStateContextType
  > = {
    [SET_NYLAS_CALENDAR_ACCOUNTS]: state => ({
      ...state,
      calendarAccounts: action.accounts,
    }),
    [SET_NYLAS_EMAIL_ACCOUNTS]: state => ({
      ...state,
      emailAccounts: action.accounts,
    }),
  };

  if (!behaviours[action.type]) {
    throw new Error(`Unhandled action type: ${action.type}`);
  }

  return behaviours[action.type](state, action);
};
