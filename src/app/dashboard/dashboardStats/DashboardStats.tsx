import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { StatCard } from 'ui/molecules';
import { StatsSection } from 'ui/organisms';

import { DashboardStatsProps } from './DashboardStats.types';

export const DashboardStats = ({ orders, ordersValue, visits, properties, emails }: DashboardStatsProps) => {
  const theme = useTheme();

  return (
    <StatsSection maxWidth={`calc(100% + ${theme.spacing(3)}px`}>
      <StatCard value={orders.value} variant={orders.type} endAdornment="%">
        Number of <strong>orders</strong> last month
      </StatCard>

      <StatCard value={ordersValue.value} variant={ordersValue.type} endAdornment="EUR">
        Value of <strong>orders</strong> last month
      </StatCard>

      <StatCard value={visits.value} variant={visits.type}>
        Number of <strong>visits</strong> last month
      </StatCard>

      <StatCard value={properties.value} variant={properties.type}>
        <strong>Properties</strong> added last month
      </StatCard>

      <StatCard value={emails.value} variant={emails.type}>
        New <strong>emails</strong> last week
      </StatCard>
    </StatsSection>
  );
};
