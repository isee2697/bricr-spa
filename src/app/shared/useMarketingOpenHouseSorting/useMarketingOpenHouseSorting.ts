/* eslint-disable @typescript-eslint/camelcase */
import { SortDirection } from 'api/types';
import { useSorting } from 'hooks';

const TABLE_SORTING_DATA = {
  newest: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  latest: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
};

export const useMarketingOpenHouseSorting = () => useSorting(TABLE_SORTING_DATA);
