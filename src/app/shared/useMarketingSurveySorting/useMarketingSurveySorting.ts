/* eslint-disable @typescript-eslint/camelcase */
import { SortDirection } from 'api/types';
import { useSorting } from 'hooks';

const SORTING_DATA = {
  name: { sortColumn: 'name', sortDirection: SortDirection.Desc },
  sent: { sortColumn: 'sent', sortDirection: SortDirection.Desc },
  completed: { sortColumn: 'completed', sortDirection: SortDirection.Desc },
  type: { sortColumn: 'type', sortDirection: SortDirection.Desc },
  score: { sortColumn: 'score', sortDirection: SortDirection.Desc },
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
};

export const useMarketingSurveySorting = () => useSorting(SORTING_DATA);
