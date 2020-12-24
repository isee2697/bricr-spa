import { NylasAccountItem } from 'api/types';

export type NylasAccountAction = {
  type: string;
  accounts: NylasAccountItem[];
};
