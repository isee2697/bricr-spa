import { ReactNode } from 'react';

import { Email } from '../../Email.types';
import { Pim } from 'api/types';
import { CrmItem } from 'app/crm/Crm.types';
import { SalesLead } from 'app/sales/salesLeads/SalesLeads.types';

export type MenuItemType = {
  value: string;
  icon: ReactNode;
  onClick: VoidFunction;
  isChecked?: boolean;
  color?: string;
};

export type DestinationsProps = {
  email: Email;
  linkedRelations: CrmItem[];
  linkedPims: Pim[];
  linkedSalesOrders: SalesLead[];
  actions: MenuItemType[];
  onLinkPims: VoidFunction;
  onLinkRelations: VoidFunction;
  onLinkSalesOrders: VoidFunction;
};
