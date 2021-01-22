import { ReactElement } from 'react';

import { QuotationsTabStatus, SalesQuotation } from '../../Quotations.types';

export type QuotationItemProps = {
  status: QuotationsTabStatus;
  quotation: SalesQuotation;
  checked: boolean;
  checkbox: ReactElement;
};
