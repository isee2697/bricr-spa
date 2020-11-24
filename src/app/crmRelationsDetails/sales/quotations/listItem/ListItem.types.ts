import { ReactElement } from 'react';

import { SalesQuotation } from '../../../../sales/quotations/Quotations.types';

export type ListItemProps = {
  item: SalesQuotation;
  checked: boolean;
  checkbox: ReactElement;
  status: 'active' | 'accepted' | 'declined';
};
