import React from 'react';

import { useCrmListQuery } from 'api/types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CrmItem } from '../Crm.types';

import { RelationsContainerProps } from './Relations.types';
import { Relations } from './Relations';

export const RelationsContainer = (props: RelationsContainerProps) => {
  const { data } = useCrmListQuery();

  const crms: CrmItem[] = (data?.crmList || []).map(crm => ({ ...mockCrm, ...crm }));

  return <Relations {...props} crms={crms} />;
};
