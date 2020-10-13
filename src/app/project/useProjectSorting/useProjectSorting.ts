/* eslint-disable @typescript-eslint/camelcase */
import { useState } from 'react';
import { SortDirection } from 'api/types';
import { useLocale } from 'hooks';

const SORTING_DATA: { [key: string]: { sortColumn: string; sortDirection: SortDirection } } = {
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  lowest_rent_price: { sortColumn: 'rentPriceFrom', sortDirection: SortDirection.Asc },
  highest_rent_price: { sortColumn: 'rentPriceFrom', sortDirection: SortDirection.Desc },
  lowest_sale_price: { sortColumn: 'salePriceFrom', sortDirection: SortDirection.Asc },
  highest_sale_price: { sortColumn: 'salePriceFrom', sortDirection: SortDirection.Desc },
};

export const useProjectSorting = () => {
  const { formatMessage } = useLocale();

  const [sortingKey, setSortingKey] = useState(Object.keys(SORTING_DATA)[0]);

  const sortOptions = Object.keys(SORTING_DATA).map(key => ({
    name: formatMessage({ id: `property_item.sorting.${key}` }),
    key,
  }));

  return {
    sorting: {
      sortOptions,
      onSort(value: string) {
        setSortingKey(value);
      },
    },
    query: SORTING_DATA[sortingKey],
  };
};
