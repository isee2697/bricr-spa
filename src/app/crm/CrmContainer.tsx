import React from 'react';

import { CRMS } from 'api/mocks/crm';
import { useCrmQueryParams } from 'app/shared/useCrmQueryParams/useCrmQueryParams';

import { Crm } from './Crm';

export const CrmContainer = () => {
  const { status, type, setStatus, setType } = useCrmQueryParams({});

  const crms = CRMS;

  return <Crm crms={crms} type={type} onTypeChange={setType} status={status} onStatusChange={setStatus}></Crm>;
};
