import React from 'react';

import { useGetSalesList } from 'hooks/useGetSalesList/useGetSalesList';
import { SalesLabel } from 'api/types';

import { Orders } from './Orders';
import { OrdersContainerProps } from './Orders.types';

export const OrdersContainer = (props: OrdersContainerProps) => {
  const { data, status, setStatus, sortType, setSortType } = useGetSalesList(SalesLabel.Order);

  return (
    <Orders
      {...props}
      status={status}
      sortType={sortType}
      onChangeStatus={setStatus}
      onChangeSortType={setSortType}
      orders={data}
    />
  );
};
