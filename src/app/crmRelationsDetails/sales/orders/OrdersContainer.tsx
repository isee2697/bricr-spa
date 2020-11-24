import React from 'react';

import { OrdersContainerProps } from './Orders.types';
import { Orders } from './Orders';

export const OrdersContainer = (props: OrdersContainerProps) => {
  return <Orders {...props} />;
};
