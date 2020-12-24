import { Dispatch } from 'react';

import { NylasAccountItem } from 'api/types';
import { NylasAccountAction } from '../nylasAccountReducer/nylasAccountReducer.types';

export type NylasAccountStateContextType = {
  accounts: NylasAccountItem[];
};

export type NylasAccountDispatchContextType = Dispatch<NylasAccountAction>;
