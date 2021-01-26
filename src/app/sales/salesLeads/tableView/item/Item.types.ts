import { ReactElement } from 'react';

import { SalesLead } from '../../SalesLeads.types';

export type QuotationItemProps = {
  item: SalesLead;
  checked: boolean;
  checkbox: ReactElement;
};
