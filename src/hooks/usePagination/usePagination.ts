import { useQueryParam, NumberParam } from 'use-query-params';

import { UsePaginationType } from './usePagination.types';

export const usePagination: UsePaginationType = ({ itemsCount, perPageOptions, prefix = '' }) => {
  const [pageIndex = 0, setPageIndex] = useQueryParam<number | null | undefined>(`${prefix}pageIndex`, NumberParam);
  const [currentPerPage, setPerPage] = useQueryParam<number | null | undefined>(`${prefix}perPage`, NumberParam);

  const perPage =
    typeof currentPerPage !== 'number' ? (perPageOptions[0] === 'All' ? 0 : perPageOptions[0]) : currentPerPage;

  return {
    pagination: {
      count: !perPage || itemsCount === 0 ? 1 : Math.floor((itemsCount - 1) / perPage) + 1,
      page: (pageIndex || 0) + 1,
      onChange(event, value) {
        setPageIndex(value - 1);
      },
      currentPerPage: perPage || 'All',
      perPageOptions,
      onPerPageChange(value) {
        setPageIndex(0);
        setPerPage(value === 'All' ? 0 : value);
      },
    },
    query: {
      from: !perPage ? 0 : (pageIndex || 0) * perPage,
      limit: !perPage ? undefined : perPage,
    },
  };
};
