/* eslint-disable @typescript-eslint/camelcase */
import { SortDirection } from 'api/types';
import { useSorting } from 'hooks';

const SORTING_DATA: { [key: string]: { sortColumn: string; sortDirection: SortDirection } } = {
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  lowest_rent_price: { sortColumn: 'rentPriceFrom', sortDirection: SortDirection.Asc },
  highest_rent_price: { sortColumn: 'rentPriceFrom', sortDirection: SortDirection.Desc },
  lowest_sale_price: { sortColumn: 'salePriceFrom', sortDirection: SortDirection.Asc },
  highest_sale_price: { sortColumn: 'salePriceFrom', sortDirection: SortDirection.Desc },
};

export const useObjectTypesSorting = () => useSorting(SORTING_DATA);
