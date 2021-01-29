import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Dashboard } from './Dashboard';

export const DashboardContainer = (props: PimDetailsSectionProps) => {
  return <Dashboard {...props} />;
};

export default DashboardContainer;
