import React from 'react';

import { DashboardStats } from './DashboardStats';

// @TODO - replace with real data
const mockData = {
  pims: {
    value: 231,
    type: 'success',
    optionalValue: 15,
  },
  crms: {
    value: 2,
    type: 'warning',
    optionalValue: 15,
  },
  sales: {
    value: 2,
    type: 'error',
    optionalValue: 15,
  },
  emails: {
    value: 144,
    type: 'success',
    optionalValue: 15,
  },
  appointments: {
    value: 14,
    type: 'success',
    optionalValue: 15,
  },
  documents: {
    value: 2,
    type: 'error',
    optionalValue: 15,
  },
} as const;

export const DashboardStatsContainer = () => <DashboardStats {...mockData} />;
