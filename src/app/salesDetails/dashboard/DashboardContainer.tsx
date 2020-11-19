import React from 'react';

import { CRM } from 'api/mocks/crm';

import { Dashboard } from './Dashboard';
import { DashboardContainerProps } from './Dashboard.types';

export const DashboardContainer = (props: DashboardContainerProps) => {
  return <Dashboard {...props} crm={CRM} />;
};
