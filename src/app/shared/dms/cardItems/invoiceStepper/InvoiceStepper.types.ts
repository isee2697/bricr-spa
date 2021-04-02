export type InvoiceStepperProps = {
  steps: InvoiceStep[];
};

export type InvoiceStep = {
  step: InvoicesStepStatus;
  date?: string;
  status?: 'completed' | 'rejected' | 'active' | 'inactive';
};

export enum InvoicesStepStatus {
  Created = 'Created',
  Sent = 'Sent',
  Accepted = 'Accepted',
  Paid = 'Paid',
  Rejected = 'Rejected',
  Overdue = 'Overdue',
}
