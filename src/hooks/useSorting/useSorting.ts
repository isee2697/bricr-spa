import { useState } from 'react';
import { useLocale } from 'hooks';

import { Options } from './useSorting.types';

export const useSorting = (options: Options) => {
  const { formatMessage } = useLocale();

  const [sortingKey, setSortingKey] = useState(Object.keys(options)[0]);

  const sortOptions = Object.keys(options).map(key => ({
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
    query: options[sortingKey],
  };
};
