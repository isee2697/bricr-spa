import React from 'react';

import { CRM_PROFESSIONAL_CONTACT_NOTARY as mockData } from 'api/mocks/crm-professional-contact';

import { Purchase } from './Purchase';
import { PurchaseContainerProps } from './Purchase.types';

export const PurchaseContainer = (props: PurchaseContainerProps) => {
  return <Purchase {...props} items={[mockData]} />;
};
