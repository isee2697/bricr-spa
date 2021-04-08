import React from 'react';

import { InvoiceItems } from 'api/mocks/dms-invoice';

import { Invoices } from './Invoices';

export const InvoicesContainer = () => {
  const data = InvoiceItems;

  return <Invoices invoices={data} />;
};
