import { ReactElement } from 'react';

import { Sales } from 'api/types';

export type OrderItemProps = {
  item: Sales;
  checked: boolean;
  checkbox: ReactElement;
};
