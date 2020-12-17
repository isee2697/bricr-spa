import { DateTime } from 'luxon';

import { SalesLead, SalesLeadInterest, SalesLeadStepAction } from 'app/sales/salesLeads/SalesLeads.types';
import {
  SalesAcquisition,
  SalesAcquisitionInterest,
  SalesAcquisitionStepAction,
} from 'app/sales/salesAcquisition/SalesAcquisition.types';
import { SalesOrder, SalesOrderInterest } from 'app/sales/orders/Orders.types';
import {
  SalesQuotation,
  SalesQuotationInterest,
  SalesQuotationStepAction,
} from 'app/sales/quotations/Quotations.types';
import {
  InvoicesStatus,
  SalesInvoice,
  SalesInvoiceInterest,
  SalesInvoiceType,
} from 'app/crmRelationsDetails/sales/invoices/Invoices.types';

export const SALES_LEADS: SalesLead[] = [
  {
    id: '0001',
    image: 'http://placeimg.com/160/152/people',
    name: 'Christian van Gils',
    number: '06-48764044',
    email: 'miesvanderrohe@gmail.com',
    partner: {
      image: 'http://placeimg.com/160/152/people',
      name: 'Anna Kowalska',
    },
    interests: [SalesLeadInterest.SellingHome, SalesLeadInterest.FreeValuation],
    steps: [
      {
        action: SalesLeadStepAction.FirstContact,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesLeadStepAction.Call,
        date: DateTime.local(),
        status: 'rejected',
      },
      {
        action: SalesLeadStepAction.Call,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesLeadStepAction.Email,
        date: DateTime.local(),
        status: 'active',
      },
    ],
  },
  {
    id: '0002',
    image: 'http://placeimg.com/160/152/people',
    name: 'Christian van Gils',
    number: '06-48764044',
    email: 'miesvanderrohe@gmail.com',
    interests: [SalesLeadInterest.Appraisal, SalesLeadInterest.Mortgage],
    steps: [
      {
        action: SalesLeadStepAction.FirstContact,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesLeadStepAction.Email,
        date: DateTime.local(),
        status: 'active',
      },
    ],
  },
  {
    id: '0003',
    image: 'http://placeimg.com/160/152/people',
    name: 'Christian van Gils',
    number: '06-48764044',
    email: 'miesvanderrohe@gmail.com',
    interests: [SalesLeadInterest.Appraisal, SalesLeadInterest.Mortgage],
    steps: [
      {
        action: SalesLeadStepAction.FirstContact,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesLeadStepAction.Call,
        date: DateTime.local(),
        status: 'rejected',
      },
      {
        action: SalesLeadStepAction.Call,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesLeadStepAction.Email,
        date: DateTime.local(),
        status: 'active',
      },
    ],
  },
  {
    id: '0004',
    name: 'Christian van Gils',
    number: '06-48764044',
    email: 'miesvanderrohe@gmail.com',
    interests: [SalesLeadInterest.Appraisal, SalesLeadInterest.Mortgage],
    steps: [
      {
        action: SalesLeadStepAction.FirstContact,
        date: DateTime.local(),
        status: 'completed',
      },
    ],
    isNewlyAdded: true,
  },
];

export const SALES_ACQUISITION: SalesAcquisition[] = [
  {
    id: '0001',
    image: 'http://placeimg.com/160/152/people',
    name: 'Christian van Gils',
    number: '06-48764044',
    email: 'miesvanderrohe@gmail.com',
    partner: {
      image: 'http://placeimg.com/160/152/people',
      name: 'Anna Kowalska',
    },
    address: 'Waterlooplein 887, Geldrop',
    interests: [SalesAcquisitionInterest.SellingHome, SalesAcquisitionInterest.FreeValuation],
    accountManagers: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Christian van Gils',
      },
      {
        name: 'Rens van Gils',
      },
    ],
    steps: [
      {
        action: SalesAcquisitionStepAction.Started,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesAcquisitionStepAction.Call,
        date: DateTime.local(),
        status: 'active',
      },
    ],
  },
  {
    id: '0002',
    image: 'http://placeimg.com/160/152/people',
    name: 'Christian van Gils',
    number: '06-48764044',
    email: 'miesvanderrohe@gmail.com',
    partner: {
      image: 'http://placeimg.com/160/152/people',
      name: 'Anna Kowalska',
    },
    address: 'Isenburgstraat 36, Breda',
    interests: [SalesAcquisitionInterest.SellingHome, SalesAcquisitionInterest.FreeValuation],
    accountManagers: [
      {
        name: 'Christian van Gils',
      },
    ],
    steps: [
      {
        action: SalesAcquisitionStepAction.Started,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesAcquisitionStepAction.Call,
        date: DateTime.local(),
        status: 'rejected',
      },
      {
        action: SalesAcquisitionStepAction.Call,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesAcquisitionStepAction.Appointment,
        date: DateTime.local(),
        status: 'active',
      },
    ],
  },
];

export const SALES_ORDERS: SalesOrder[] = [
  {
    id: '0001',
    image: 'http://placeimg.com/160/152/people',
    name: 'Christian van Gils',
    number: '06-48764044',
    email: 'miesvanderrohe@gmail.com',
    partner: {
      image: 'http://placeimg.com/160/152/people',
      name: 'Anna Kowalska',
    },
    accountManagers: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Christian van Gils',
      },
      {
        name: 'Rens van Gils',
      },
    ],
    order: {
      id: '987652',
      image: 'http://placeimg.com/72/45/arch',
      interests: [SalesOrderInterest.SellingHome],
      address: 'Waterlooplein 887, Geldrop',
    },
  },
];

export const SALES_QUOTATIONS: SalesQuotation[] = [
  {
    id: '9002008',
    image: 'http://placeimg.com/160/152/people',
    address: 'Isenburgstraat 36, Breda',
    version: 1,
    partners: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Anna Kowalska',
      },
    ],
    interest: SalesQuotationInterest.SellingHome,
    accountManagers: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Christian van Gils',
      },
      {
        name: 'Rens van Gils',
      },
    ],
    steps: [
      {
        action: SalesQuotationStepAction.Created,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesQuotationStepAction.Sent,
        date: DateTime.local(),
        status: 'active',
      },
      {
        action: SalesQuotationStepAction.Pending,
        status: 'pending',
      },
    ],
  },
  {
    id: '9002004',
    image: 'http://placeimg.com/160/152/people',
    address: 'Isenburgstraat 36, Breda',
    version: 1,
    partners: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Anna Kowalska',
      },
    ],
    interest: SalesQuotationInterest.SellingHome,
    accountManagers: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Christian van Gils',
      },
      {
        name: 'Rens van Gils',
      },
    ],
    steps: [
      {
        action: SalesQuotationStepAction.Created,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesQuotationStepAction.Sent,
        date: DateTime.local(),
        status: 'active',
      },
      {
        action: SalesQuotationStepAction.Pending,
        status: 'pending',
      },
    ],
  },
  {
    id: '9002007',
    image: 'http://placeimg.com/160/152/people',
    address: 'Isenburgstraat 36, Breda',
    version: 1,
    partners: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Anna Kowalska',
      },
    ],
    interest: SalesQuotationInterest.SellingHome,
    accountManagers: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Christian van Gils',
      },
      {
        name: 'Rens van Gils',
      },
    ],
    steps: [
      {
        action: SalesQuotationStepAction.Created,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesQuotationStepAction.Sent,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesQuotationStepAction.Accepted,
        date: DateTime.local(),
        status: 'completed',
      },
    ],
  },
  {
    id: '9002006',
    image: 'http://placeimg.com/160/152/people',
    address: 'Isenburgstraat 36, Breda',
    version: 1,
    partners: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Anna Kowalska',
      },
    ],
    interest: SalesQuotationInterest.SellingHome,
    accountManagers: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Christian van Gils',
      },
      {
        name: 'Rens van Gils',
      },
    ],
    steps: [
      {
        action: SalesQuotationStepAction.Created,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesQuotationStepAction.Sent,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesQuotationStepAction.Declined,
        date: DateTime.local(),
        status: 'completed',
      },
    ],
  },
  {
    id: '9002005',
    image: 'http://placeimg.com/160/152/people',
    address: 'Isenburgstraat 36, Breda',
    version: 1,
    partners: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Anna Kowalska',
      },
    ],
    interest: SalesQuotationInterest.SellingHome,
    accountManagers: [
      {
        image: 'http://placeimg.com/160/152/people',
        name: 'Christian van Gils',
      },
      {
        name: 'Rens van Gils',
      },
    ],
    steps: [
      {
        action: SalesQuotationStepAction.Created,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesQuotationStepAction.Sent,
        date: DateTime.local(),
        status: 'completed',
      },
      {
        action: SalesQuotationStepAction.Declined,
        date: DateTime.local(),
        status: 'completed',
      },
    ],
  },
];

export const SALES_INVOICES: SalesInvoice[] = [
  {
    id: '0001',
    image: 'http://placeimg.com/160/152/people',
    type: SalesInvoiceType.StartUpInvoice,
    amount: 350,
    tax: 35,
    interest: SalesInvoiceInterest.SellingHome,
    address: 'Isenburgstraat 36, Breda',
    status: InvoicesStatus.Drafts,
    linkedObjects: [
      {
        id: '0001',
        name: 'CGM van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
      {
        id: '0002',
        name: 'S.Pit-van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
    ],
  },
  {
    id: '0002',
    number: '2019000788',
    dueDate: DateTime.local(),
    image: 'http://placeimg.com/160/152/people',
    type: SalesInvoiceType.StartUpInvoice,
    amount: 350,
    tax: 35,
    interest: SalesInvoiceInterest.SellingHome,
    address: 'Isenburgstraat 36, Breda',
    status: InvoicesStatus.Sent,
    date: DateTime.local(),
    linkedObjects: [
      {
        id: '0001',
        name: 'CGM van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
      {
        id: '0002',
        name: 'S.Pit-van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
    ],
  },
  {
    id: '0003',
    number: '2019000788',
    dueDate: DateTime.local(),
    image: 'http://placeimg.com/160/152/people',
    type: SalesInvoiceType.StartUpInvoice,
    amount: 350,
    tax: 35,
    interest: SalesInvoiceInterest.SellingHome,
    address: 'Isenburgstraat 36, Breda',
    status: InvoicesStatus.Approved,
    date: DateTime.local(),
    linkedObjects: [
      {
        id: '0001',
        name: 'CGM van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
      {
        id: '0002',
        name: 'S.Pit-van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
    ],
  },
  {
    id: '0004',
    number: '2019000788',
    dueDate: DateTime.local(),
    image: 'http://placeimg.com/160/152/people',
    type: SalesInvoiceType.StartUpInvoice,
    amount: 350,
    tax: 35,
    interest: SalesInvoiceInterest.SellingHome,
    address: 'Isenburgstraat 36, Breda',
    status: InvoicesStatus.Rejected,
    date: DateTime.local(),
    linkedObjects: [
      {
        id: '0001',
        name: 'CGM van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
      {
        id: '0002',
        name: 'S.Pit-van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
    ],
  },
  {
    id: '0005',
    number: '2019000788',
    dueDate: DateTime.local().plus({ days: 20 }),
    image: 'http://placeimg.com/160/152/people',
    type: SalesInvoiceType.StartUpInvoice,
    amount: 350,
    tax: 35,
    interest: SalesInvoiceInterest.SellingHome,
    address: 'Isenburgstraat 36, Breda',
    status: InvoicesStatus.Overdue,
    date: DateTime.local(),
    linkedObjects: [
      {
        id: '0001',
        name: 'CGM van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
      {
        id: '0002',
        name: 'S.Pit-van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
    ],
  },
  {
    id: '0006',
    number: '2019000788',
    dueDate: DateTime.local().plus({ days: 20 }),
    image: 'http://placeimg.com/160/152/people',
    type: SalesInvoiceType.StartUpInvoice,
    amount: 350,
    tax: 35,
    interest: SalesInvoiceInterest.SellingHome,
    address: 'Isenburgstraat 36, Breda',
    status: InvoicesStatus.Paid,
    date: DateTime.local(),
    linkedObjects: [
      {
        id: '0001',
        name: 'CGM van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
      {
        id: '0002',
        name: 'S.Pit-van Gils',
        image: 'http://placeimg.com/24/24/people',
      },
    ],
  },
];

export const SALES_ITEMS = [...SALES_LEADS, ...SALES_ACQUISITION, ...SALES_QUOTATIONS, ...SALES_ORDERS];
