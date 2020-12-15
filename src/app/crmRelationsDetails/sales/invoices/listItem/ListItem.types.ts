import { ReactElement } from 'react';

import { SalesInvoice } from '../Invoices.types';

export type ListItemProps = {
  item: SalesInvoice;
  checked: boolean;
  checkbox: ReactElement;
};
