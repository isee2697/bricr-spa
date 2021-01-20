import React from 'react';
import { useQueryParam } from 'use-query-params';

import { useGetSalesList } from 'hooks/useGetSalesList/useGetSalesList';
import { SalesLabel } from 'api/types';

import { Orders } from './Orders';
import { OrdersContainerProps } from './Orders.types';

export const OrdersContainer = (props: OrdersContainerProps) => {
  const { data, status, setStatus, sortType, setSortType } = useGetSalesList(SalesLabel.Order);
  const [viewMode = 'list', setViewMode] = useQueryParam<'list' | 'table'>('viewMode');

  return (
    <Orders
      {...props}
      status={status}
      sortType={sortType}
      onChangeStatus={setStatus}
      onChangeSortType={setSortType}
      orders={data}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
    />
  );
};
