import React from 'react';

import { useCrmQueryParams } from 'app/shared/useCrmQueryParams/useCrmQueryParams';
import { AppRoute } from 'routing/AppRoute.enum';

import { Crm } from './Crm';

export const CrmContainer = () => {
  const { status, setStatus } = useCrmQueryParams({});

  return <Crm path={AppRoute.crm} status={status} onStatusChange={setStatus} />;
};

export default CrmContainer;
