import { ReactElement } from 'react';

import { SalesQuotation } from '../../Quotations.types';

export type QuotationItemProps = {
  item: SalesQuotation;
  checked: boolean;
  checkbox: ReactElement;
};
