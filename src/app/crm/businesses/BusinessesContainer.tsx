import React from 'react';

import { CrmItem } from '../Crm.types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CRM_BUSINESSES } from 'api/mocks/crm-business';

import { BusinessesContainerProps } from './Businesses.types';
import { Businesses } from './Businesses';

export const BusinessesContainer = (props: BusinessesContainerProps) => {
  const crms: CrmItem[] = CRM_BUSINESSES.map(crm => ({ ...mockCrm, ...crm, status: props.status }));

  return <Businesses {...props} crms={crms} />;
};
