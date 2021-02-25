import React from 'react';

import { FinancialProfile } from './FinancialProfile';

export const FinancialProfileContainer = () => {
  const handleSave = async () => {
    return undefined;
  };

  return <FinancialProfile onSave={handleSave} />;
};
