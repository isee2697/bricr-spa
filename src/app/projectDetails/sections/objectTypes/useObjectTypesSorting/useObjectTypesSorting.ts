/* eslint-disable @typescript-eslint/camelcase */
import { SortDirection } from 'api/types';
import { useSorting } from 'hooks';

const SORTING_DATA: { [key: string]: { sortColumn: string; sortDirection: SortDirection } } = {
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  lowest_rent_price_from: { sortColumn: 'rentPriceFrom', sortDirection: SortDirection.Asc },
  highest_rent_price_from: { sortColumn: 'rentPriceFrom', sortDirection: SortDirection.Desc },
  lowest_rent_price_to: { sortColumn: 'rentPriceTo', sortDirection: SortDirection.Asc },
  highest_rent_price_to: { sortColumn: 'rentPriceTo', sortDirection: SortDirection.Desc },
  lowest_sale_price_from: { sortColumn: 'salePriceFrom', sortDirection: SortDirection.Asc },
  highest_sale_price_from: { sortColumn: 'salePriceFrom', sortDirection: SortDirection.Desc },
  lowest_sale_price_to: { sortColumn: 'salePriceTo', sortDirection: SortDirection.Asc },
  highest_sale_price_to: { sortColumn: 'salePriceTo', sortDirection: SortDirection.Desc },
};

export const useObjectTypesSorting = () => useSorting(SORTING_DATA);
