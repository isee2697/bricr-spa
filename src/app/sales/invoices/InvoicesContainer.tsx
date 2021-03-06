import React, { useState } from 'react';
import { useQueryParam } from 'use-query-params';

import { SALES_INVOICES } from 'api/mocks/sales';
import { InvoicesStatus } from 'app/crmRelationsDetails/sales/invoices/Invoices.types';

import { Invoices } from './Invoices';
import { InvoicesContainerProps } from './Invoices.types';

export const InvoicesContainer = (props: InvoicesContainerProps) => {
  const [status, setStatus] = useState<InvoicesStatus>(InvoicesStatus.Drafts);
  const [viewMode = 'list', setViewMode] = useQueryParam<'list' | 'table'>('viewMode');

  return (
    <Invoices
      {...props}
      status={status}
      onChangeStatus={setStatus}
      invoices={SALES_INVOICES.filter(invoice => invoice.status === status)}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
    />
  );
};
