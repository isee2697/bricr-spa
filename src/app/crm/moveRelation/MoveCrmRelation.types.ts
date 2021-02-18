import { AnyObject } from 'react-final-form';

import { MovePimDataQuery } from 'api/types';

export type MoveCrmRelationSubmit<T = AnyObject> = (
  body: T,
) => Promise<
  | undefined
  | {
      error: 'conflict' | 'unknown';
      conflictsCount?: number;
    }
>;

export type MoveCrmRelationProps = {
  onSubmit: MoveCrmRelationSubmit;
  isOpen: boolean;
  data?: MovePimDataQuery;
};
