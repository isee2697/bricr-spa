/* eslint-disable @typescript-eslint/camelcase */
import { useState } from 'react';

import { SortDirection } from 'api/types';
import { useLocale } from 'hooks';

const SORTING_DATA: { [key: string]: { sortColumn: string; sortDirection: SortDirection } } = {
  last_edited: { sortColumn: 'dateUpdated', sortDirection: SortDirection.Asc },
  first_edited: { sortColumn: 'dateUpdated', sortDirection: SortDirection.Desc },
};

export const usePicturesSorting = () => {
  const { formatMessage } = useLocale();

  const [sortingKey, setSortingKey] = useState(Object.keys(SORTING_DATA)[0]);

  const sortOptions = Object.keys(SORTING_DATA).map(key => ({
    name: formatMessage({ id: `pim_details.media.pictures.${key}` }),
    key,
  }));

  return {
    sorting: {
      sortOptions,
      onSort(value: string) {
        setSortingKey(value);
      },
    },
    query: {
      column: SORTING_DATA[sortingKey].sortColumn,
      direction: SORTING_DATA[sortingKey].sortDirection,
    },
  };
};
