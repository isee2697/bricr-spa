import React from 'react';

import { InvoicesContainerProps } from './Invoices.types';
import { Invoices } from './Invoices';

export const InvoicesContainer = (props: InvoicesContainerProps) => {
  return <Invoices {...props} />;
};
