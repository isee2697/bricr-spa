import React from 'react';
import { useQueryParam } from 'use-query-params';

import { SALES_ACQUISITION } from 'api/mocks/sales';

import { SalesAcquisition } from './SalesAcquisition';
import { SalesAcquisitionContainerProps } from './SalesAcquisition.types';

export const SalesAcquisitionContainer = (props: SalesAcquisitionContainerProps) => {
  const [status = 'actionRequired', setStatus] = useQueryParam<'actionRequired' | 'withdrawn' | 'active'>(
    'actionRequired',
  );

  return (
    <SalesAcquisition {...props} salesAcquisitions={SALES_ACQUISITION} status={status} onStatusChange={setStatus} />
  );
};
