import { ReactElement } from 'react';

import { OrdersTabStatus, SalesOrder } from '../Orders.types';

export type OrderItemProps = {
  status: OrdersTabStatus;
  order: SalesOrder;
  checked: boolean;
  checkbox: ReactElement;
};
