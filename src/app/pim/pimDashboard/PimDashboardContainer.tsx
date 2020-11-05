import React from 'react';

import { DashboardStatsProps } from 'app/dashboard/dashboardStats/DashboardStats.types';

import { PimDashboard } from './PimDashboard';

const mockData = {
  orders: {
    value: 42.99,
    type: 'success',
  },
  ordersValue: {
    value: 12312,
    type: 'warning',
  },
  visits: {
    value: -20,
    type: 'error',
  },
  properties: {
    value: 13,
    type: 'info',
  },
} as DashboardStatsProps;

const data = [
  { labelId: 'pim.dashboard.views', stats: mockData },
  { labelId: 'pim.dashboard.sales', stats: mockData },
  { labelId: 'pim.dashboard.aquisitions', stats: mockData },
];
export const PimDashboardContainer = () => {
  return <PimDashboard data={data} />;
};
