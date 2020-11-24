import React from 'react';

import { CRM as mockCrm } from 'api/mocks/crm';
import { useCrmQueryParams } from 'app/shared/useCrmQueryParams/useCrmQueryParams';
import { useCrmListQuery } from 'api/types';

import { Crm } from './Crm';
import { CrmItem } from './Crm.types';

export const CrmContainer = () => {
  const { status, type, setStatus, setType } = useCrmQueryParams({});
  const { data } = useCrmListQuery();

  const crms: CrmItem[] = (data?.crmList || []).map(crm => ({ ...mockCrm, ...crm }));

  return <Crm crms={crms} type={type} onTypeChange={setType} status={status} onStatusChange={setStatus}></Crm>;
};
