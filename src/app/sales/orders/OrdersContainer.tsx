import React from 'react';

import { useSalesOrdersQueryParams } from 'app/shared/useSalesOrdersQueryParams/useSalesOrdersQueryParams';
import { SALES_ORDERS } from 'api/mocks/sales';

import { Orders } from './Orders';
import { OrdersContainerProps } from './Orders.types';

export const OrdersContainer = (props: OrdersContainerProps) => {
  const { status, sortType, setStatus, setSortType } = useSalesOrdersQueryParams({});

  return (
    <Orders
      {...props}
      status={status}
      sortType={sortType}
      onChangeStatus={setStatus}
      onChangeSortType={setSortType}
      orders={SALES_ORDERS}
    />
  );
};
