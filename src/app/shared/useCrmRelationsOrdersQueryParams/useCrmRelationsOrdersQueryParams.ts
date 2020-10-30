import { useState } from 'react';

import { OrdersListTab } from '../../crmRelationsDetails/orders/list/List.types';

type defaultValues = {
  status?: OrdersListTab;
};

export const useCrmRelationsOrdersQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || OrdersListTab.Active, setStatus] = useState<OrdersListTab>(OrdersListTab.Active);

  return { status, setStatus };
};
