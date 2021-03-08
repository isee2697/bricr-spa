import React from 'react';

import { CRM_PROFESSIONAL_CONTACT_NOTARY as mockData } from 'api/mocks/crm-professional-contact';

import { Appraiser } from './Appraiser';
import { AppraiserContainerProps } from './Appraiser.types';

export const AppraiserContainer = (props: AppraiserContainerProps) => {
  return <Appraiser {...props} items={[mockData]} />;
};
