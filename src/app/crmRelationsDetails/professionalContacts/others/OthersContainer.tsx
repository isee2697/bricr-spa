import React from 'react';

import { CRM_PROFESSIONAL_CONTACT_NOTARY as mockData } from 'api/mocks/crm-professional-contact';

import { Others } from './Others';
import { OthersContainerProps } from './Others.types';

export const OthersContainer = (props: OthersContainerProps) => {
  return <Others {...props} items={[mockData]} />;
};
