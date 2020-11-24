import { ReactElement } from 'react';

import { SalesAcquisition } from '../SalesAcquisition.types';

export type SalesAcquisitionItemProps = {
  status: 'actionRequired' | 'active' | 'withdrawn';
  salesAcquisition: SalesAcquisition;
  checked: boolean;
  checkbox: ReactElement;
};
