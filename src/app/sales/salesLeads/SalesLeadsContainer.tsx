import React from 'react';
import { useQueryParam } from 'use-query-params';

import { SALES_LEADS } from 'api/mocks/sales';

import { SalesLeads } from './SalesLeads';
import { SalesLeadsContainerProps } from './SalesLeads.types';

export const SalesLeadsContainer = (props: SalesLeadsContainerProps) => {
  const [status = 'actionRequired', setStatus] = useQueryParam<'actionRequired' | 'withdrawn'>('actionRequired');
  const [viewMode = 'list', setViewMode] = useQueryParam<'list' | 'card'>('viewMode');

  return (
    <SalesLeads
      {...props}
      status={status}
      onStatusChange={setStatus}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
      salesLeads={SALES_LEADS}
    />
  );
};
