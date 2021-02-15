/* eslint-disable @typescript-eslint/camelcase */
import { SortDirection } from 'api/types';
import { useSorting } from 'hooks';

const SORTING_DATA = {
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
};

export const useCrmsSorting = () => useSorting(SORTING_DATA);
