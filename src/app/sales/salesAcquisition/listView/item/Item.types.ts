import { ReactElement } from 'react';

import { Sales, SalesStatus } from 'api/types';

export type SalesAcquisitionItemProps = {
  status: SalesStatus;
  salesAcquisition: Sales;
  checked: boolean;
  checkbox: ReactElement;
};
