import { InvoiceItemStatus, InvoiceItemType } from 'app/shared/dms/cardItems/invoiceItem/InvoiceItem.types';
import { InvoicesStepStatus } from 'app/shared/dms/cardItems/invoiceStepper/InvoiceStepper.types';

import { MAIN_USER } from './profile';

export const InvoiceItems: InvoiceItemType[] = [
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: InvoicesStepStatus.Created,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Sent,
        date: new Date().toISOString(),
        status: 'active',
      },
      {
        step: InvoicesStepStatus.Accepted,
        status: 'inactive',
      },
      {
        step: InvoicesStepStatus.Paid,
        status: 'inactive',
      },
    ],
    details: {
      invoiceNumber: 'INV-2019088',
      invoiceDate: new Date().toISOString(),
      invoiceDueDate: new Date().toISOString(),
      invoiceType: 'Start-up Invoice',
      amount: 350,
      tax: 35,
      total: 385,
      address: 'Isenburgstraat 36, Breda',
    },
    status: InvoiceItemStatus.ActionRequired,
  },
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: InvoicesStepStatus.Created,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Sent,
        status: 'inactive',
      },
      {
        step: InvoicesStepStatus.Accepted,
        status: 'inactive',
      },
      {
        step: InvoicesStepStatus.Paid,
        status: 'inactive',
      },
    ],
    details: {
      invoiceType: 'Start-up Invoice',
      address: 'Isenburgstraat 36, Breda',
    },
    status: InvoiceItemStatus.Drafts,
  },
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: InvoicesStepStatus.Created,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Sent,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Accepted,
        status: 'inactive',
      },
      {
        step: InvoicesStepStatus.Paid,
        status: 'inactive',
      },
    ],
    details: {
      invoiceNumber: 'INV-2019088',
      invoiceDate: new Date().toISOString(),
      invoiceDueDate: new Date().toISOString(),
      invoiceType: 'Start-up Invoice',
      amount: 350,
      tax: 35,
      total: 385,
      address: 'Isenburgstraat 36, Breda',
    },
    status: InvoiceItemStatus.Sent,
  },
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: InvoicesStepStatus.Created,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Sent,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Accepted,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Paid,
        status: 'inactive',
      },
    ],
    details: {
      invoiceNumber: 'INV-2019088',
      invoiceDate: new Date().toISOString(),
      invoiceDueDate: new Date().toISOString(),
      invoiceType: 'Start-up Invoice',
      amount: 350,
      tax: 35,
      total: 385,
      address: 'Isenburgstraat 36, Breda',
    },
    status: InvoiceItemStatus.Accepted,
  },
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: InvoicesStepStatus.Created,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Sent,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Rejected,
        date: new Date().toISOString(),
        status: 'rejected',
      },
      {
        step: InvoicesStepStatus.Paid,
        status: 'inactive',
      },
    ],
    details: {
      invoiceNumber: 'INV-2019088',
      invoiceDate: new Date().toISOString(),
      invoiceDueDate: new Date().toISOString(),
      invoiceType: 'Start-up Invoice',
      amount: 350,
      tax: 35,
      total: 385,
      address: 'Isenburgstraat 36, Breda',
    },
    status: InvoiceItemStatus.Rejected,
  },
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: InvoicesStepStatus.Created,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Sent,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Accepted,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Overdue,
        date: new Date().toISOString(),
        status: 'rejected',
      },
    ],
    details: {
      invoiceNumber: 'INV-2019088',
      invoiceDate: new Date().toISOString(),
      invoiceDueDate: new Date().toISOString(),
      invoiceType: 'Start-up Invoice',
      amount: 350,
      tax: 35,
      total: 385,
      address: 'Isenburgstraat 36, Breda',
    },
    status: InvoiceItemStatus.Overdue,
  },
  {
    owners: [MAIN_USER, MAIN_USER],
    steps: [
      {
        step: InvoicesStepStatus.Created,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Sent,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Accepted,
        date: new Date().toISOString(),
        status: 'completed',
      },
      {
        step: InvoicesStepStatus.Overdue,
        date: new Date().toISOString(),
        status: 'completed',
      },
    ],
    details: {
      invoiceNumber: 'INV-2019088',
      invoiceDate: new Date().toISOString(),
      invoiceDueDate: new Date().toISOString(),
      invoiceType: 'Start-up Invoice',
      amount: 350,
      tax: 35,
      total: 385,
      address: 'Isenburgstraat 36, Breda',
    },
    status: InvoiceItemStatus.Paid,
  },
];
