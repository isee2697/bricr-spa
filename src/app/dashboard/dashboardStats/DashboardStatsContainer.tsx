import React from 'react';

import { DashboardStats } from './DashboardStats';

// @TODO - replace with real data
const mockData = {
  orders: {
    value: 42.99,
    type: 'success',
  },
  ordersValue: {
    value: 123123512,
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
  emails: {
    value: 252,
    type: 'success',
  },
} as const;

export const DashboardStatsContainer = () => <DashboardStats {...mockData} />;
