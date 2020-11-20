import React from 'react';

import { Dashboard } from './Dashboard';
import { DashboardContainerProps } from './Dashboard.types';

export const DashboardContainer = (props: DashboardContainerProps) => {
  return <Dashboard {...props} />;
};
