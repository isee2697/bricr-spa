import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { InvoiceItemStatus } from '../../cardItems/invoiceItem/InvoiceItem.types';

export const InvoiceTabs: ActionTab[] = Object.keys(InvoiceItemStatus).map(status => ({
  value: status,
  label: `dms.invoices.tab.${status}`,
  hasBadge: status === InvoiceItemStatus.ActionRequired,
}));
