import React from 'react';

import { useCrmQueryParams } from 'app/shared/useCrmQueryParams/useCrmQueryParams';

import { Crm } from './Crm';

export const CrmContainer = () => {
  const { status, type, setStatus, setType } = useCrmQueryParams({});

  return <Crm type={type} onTypeChange={setType} status={status} onStatusChange={setStatus}></Crm>;
};
