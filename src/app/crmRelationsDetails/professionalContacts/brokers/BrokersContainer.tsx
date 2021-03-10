import React from 'react';

import { CRM_PROFESSIONAL_CONTACT_BROKER as mockData } from 'api/mocks/crm-professional-contact';

import { Brokers } from './Brokers';
import { BrokersContainerProps } from './Brokers.types';

export const BrokersContainer = (props: BrokersContainerProps) => {
  return <Brokers {...props} items={[mockData]} />;
};
