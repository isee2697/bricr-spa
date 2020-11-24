import { ReactElement } from 'react';

import { SalesAcquisition } from '../../../../sales/salesAcquisition/SalesAcquisition.types';

export type ListItemProps = {
  item: SalesAcquisition;
  checked: boolean;
  checkbox: ReactElement;
  status: 'active' | 'withdrawn';
};
