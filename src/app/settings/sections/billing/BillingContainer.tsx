import React, { useEffect, useState } from 'react';

import { Loader } from 'ui/atoms';

import { Billing } from './Billing';
import { BillingProps } from './BillingContainer.types';

export const BillingContainer = ({ billingUrl }: BillingProps) => {
  const [string, updateString] = useState('');
  const [loading, updateloading] = useState(true);

  useEffect(() => {
    updateString(billingUrl);
    updateloading(false);
  }, [string, billingUrl]);

  if (loading) {
    return <Loader />;
  }

  return <Billing billingUrl={string} />;
};
