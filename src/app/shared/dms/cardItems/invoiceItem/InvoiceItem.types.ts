import { Profile } from 'api/types';
import { InvoiceStep } from '../invoiceStepper/InvoiceStepper.types';

export type InvoiceItemProps = {
  item: InvoiceItemType;
};

export type InvoiceItemType = {
  owners: Profile[];
  steps: InvoiceStep[];
  details: {
    invoiceNumber?: string;
    invoiceDate?: string;
    invoiceDueDate?: string;
    invoiceType?: string;
    amount?: number;
    tax?: number;
    total?: number;
    address?: string;
  };
  status: InvoiceItemStatus;
};

export enum InvoiceItemStatus {
  ActionRequired = 'ActionRequired',
  Drafts = 'Drafts',
  Sent = 'Sent',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
  Overdue = 'Overdue',
  Paid = 'Paid',
}
