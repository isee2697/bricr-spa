/* eslint-disable @typescript-eslint/camelcase */
import { SortDirection } from 'api/types';
import { useSorting } from 'hooks';

const SORTING_DATA = {
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  lowest_rent_price: { sortColumn: 'rentPrice', sortDirection: SortDirection.Asc },
  highest_rent_price: { sortColumn: 'rentPrice', sortDirection: SortDirection.Desc },
  lowest_sale_price: { sortColumn: 'salePrice', sortDirection: SortDirection.Asc },
  highest_sale_price: { sortColumn: 'salePrice', sortDirection: SortDirection.Desc },
};

export const usePimsSorting = () => useSorting(SORTING_DATA);
