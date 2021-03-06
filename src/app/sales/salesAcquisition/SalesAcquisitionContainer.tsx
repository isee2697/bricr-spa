import React from 'react';
import { useQueryParam } from 'use-query-params';

import { SalesLabel } from 'api/types';
import { useGetSalesList } from 'hooks/useGetSalesList/useGetSalesList';

import { SalesAcquisition } from './SalesAcquisition';
import { SalesAcquisitionContainerProps } from './SalesAcquisition.types';

export const SalesAcquisitionContainer = (props: SalesAcquisitionContainerProps) => {
  const { data, status, setStatus } = useGetSalesList(SalesLabel.Acquisition);
  const [viewMode = 'list', setViewMode] = useQueryParam<'list' | 'table'>('viewMode');

  return (
    <SalesAcquisition
      {...props}
      salesAcquisitions={data}
      status={status}
      onStatusChange={setStatus}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
    />
  );
};
