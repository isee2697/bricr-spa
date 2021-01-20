import { ReactElement } from 'react';

import { SalesLead } from '../../SalesLeads.types';

export type SalesLeadItemProps = {
  status: 'actionRequired' | 'withdrawn';
  salesLead: SalesLead;
  checked: boolean;
  checkbox: ReactElement;
};
