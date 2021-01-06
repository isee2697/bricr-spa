import { NylasAccountAction } from '../nylasAccountReducer/nylasAccountReducer.types';
import { SET_NYLAS_CALENDAR_ACCOUNTS, SET_NYLAS_EMAIL_ACCOUNTS } from '../nylasAccountReducer/nylasAccountReducer';
import { NylasAccountItem } from 'api/types';

export const setNylasCalendarAccounts: (accounts: NylasAccountItem[]) => NylasAccountAction = accounts => ({
  type: SET_NYLAS_CALENDAR_ACCOUNTS,
  accounts,
});

export const setNylasEmailAccounts: (accounts: NylasAccountItem[]) => NylasAccountAction = accounts => ({
  type: SET_NYLAS_EMAIL_ACCOUNTS,
  accounts,
});
