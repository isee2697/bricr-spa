import { ReactElement } from 'react';

import { SalesOrder } from '../../../../sales/orders/Orders.types';

export type ListItemProps = {
  item: SalesOrder;
  checked: boolean;
  checkbox: ReactElement;
  status: 'actionRequired' | 'active' | 'completed' | 'withdrawn';
};
