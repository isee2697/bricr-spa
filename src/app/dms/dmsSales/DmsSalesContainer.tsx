import React from 'react';

import { useGetSalesList } from 'hooks/useGetSalesList/useGetSalesList';
import { SalesLabel } from 'api/types';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';

import { DmsSales } from './DmsSales';
import { DmsSalesContainerProps } from './DmsSales.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const DmsSalesContainer = ({ type }: DmsSalesContainerProps) => {
  const { data, loading } = useGetSalesList(type as SalesLabel);

  const { pagination } = usePagination({
    itemsCount: 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  return <DmsSales sales={data} isLoading={loading} type={type} pagination={pagination} />;
};
