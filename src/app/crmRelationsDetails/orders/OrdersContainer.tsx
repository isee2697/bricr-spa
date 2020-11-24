import React from 'react';

import { Orders } from './Orders';
import { OrdersContainerProps } from './Orders.types';

export const OrdersContainer = (props: OrdersContainerProps) => {
  return <Orders {...props} />;
};
