import { useState, useEffect } from 'react';

import { PerPageType } from 'ui/atoms/pagination/Pagination.types';

import { UsePaginationType } from './usePagination.types';

export const usePagination: UsePaginationType = ({ itemsCount, perPageOptions }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [perPage, setPerPage] = useState<PerPageType>(perPageOptions[0]);

  useEffect(() => {
    setPageIndex(0);
    setPerPage(perPageOptions[0]);
  }, [itemsCount, perPageOptions]);

  return {
    pagination: {
      count: perPage === 'All' || itemsCount === 0 ? 1 : Math.floor((itemsCount - 1) / perPage) + 1,
      page: pageIndex + 1,
      onChange(event, value) {
        setPageIndex(value - 1);
      },
      currentPerPage: perPage,
      perPageOptions,
      onPerPageChange(value) {
        setPageIndex(0);
        setPerPage(value);
      },
    },
    query: {
      from: perPage === 'All' ? 0 : pageIndex * perPage,
      limit: perPage === 'All' ? undefined : perPage,
    },
  };
};
