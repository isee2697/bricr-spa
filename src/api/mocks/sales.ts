import { DateTime } from 'luxon';

import { SalesLead, SalesLeadInterest, SalesLeadStepAction } from 'app/sales/salesLeads/SalesLeads.types';

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
];
