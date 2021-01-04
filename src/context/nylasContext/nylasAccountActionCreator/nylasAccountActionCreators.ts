import { NylasAccountAction } from '../nylasAccountReducer/nylasAccountReducer.types';
import { SET_NYLAS_ACCOUNTS } from '../nylasAccountReducer/nylasAccountReducer';
import { NylasAccountItem } from 'api/types';

export const setNylasAccounts: (accounts: NylasAccountItem[]) => NylasAccountAction = accounts => ({
  type: SET_NYLAS_ACCOUNTS,
  accounts,
});
