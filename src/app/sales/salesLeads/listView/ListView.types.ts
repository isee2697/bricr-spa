import { SalesLead } from '../SalesLeads.types';

export type ListViewProps = {
  items: SalesLead[];
  status: 'actionRequired' | 'withdrawn';
};
