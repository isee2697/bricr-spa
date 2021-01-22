import { ReactElement } from 'react';

import { Sales, SalesStatus } from 'api/types';

export type OrderItemProps = {
  status: SalesStatus;
  order: Sales;
  checked: boolean;
  checkbox: ReactElement;
};
