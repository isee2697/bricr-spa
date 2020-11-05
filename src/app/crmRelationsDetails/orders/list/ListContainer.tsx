import React, { useEffect, useState } from 'react';

import { useCrmRelationsOrdersQueryParams } from 'app/shared/useCrmRelationsOrdersQueryParams/useCrmRelationsOrdersQueryParams';
import { CRM_ORDERS } from 'api/queries/crm-orders';

import { OrdersList } from './List';
import { OrdersData, OrdersListTab } from './List.types';

export const OrdersListContainer = () => {
  const { status, setStatus } = useCrmRelationsOrdersQueryParams({});
  const [data, setData] = useState<OrdersData>(CRM_ORDERS);

  useEffect(() => {
    switch (status) {
      case OrdersListTab.ActionRequired:
        setData(CRM_ORDERS);
        break;
      case OrdersListTab.Active:
        setData(CRM_ORDERS);
        break;
      case OrdersListTab.Archived:
        setData(CRM_ORDERS);
        break;
      default:
        setData(CRM_ORDERS);
    }
  }, [status]);

  return <OrdersList status={status} onStatusChange={setStatus} data={data} />;
};
