import { ReactElement } from 'react';

import { SalesInvoice } from 'app/crmRelationsDetails/sales/invoices/Invoices.types';

export type InvoiceItemProps = {
  item: SalesInvoice;
  checked: boolean;
  checkbox: ReactElement;
};
