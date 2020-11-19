import { useQueryParam } from 'use-query-params';

import { OrdersTabStatus } from '../../sales/orders/Orders.types';

type defaultValues = {
  status?: OrdersTabStatus;
  sortType?: string;
};

export const useSalesOrdersQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || OrdersTabStatus.ActionRequired, setStatus] = useQueryParam<OrdersTabStatus>(
    'status',
  );
  const [sortType = defaults.sortType || '', setSortType] = useQueryParam<string>('sortType');

  return {
    status,
    sortType,
    setStatus,
    setSortType,
  };
};
