import React from 'react';

import { CRM_PROFESSIONAL_CONTACT_NOTARY as mockData } from 'api/mocks/crm-professional-contact';

import { Notary } from './Notary';
import { NotaryContainerProps } from './Notary.types';

export const NotaryContainer = (props: NotaryContainerProps) => {
  return <Notary {...props} items={[mockData]} />;
};
