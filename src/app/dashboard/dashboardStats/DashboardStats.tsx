import React from 'react';

import { StatCard } from 'ui/molecules';
import { StatsSection } from 'ui/organisms';

export const DashboardStats = () => (
  <StatsSection>
    <StatCard value={1021391200} endAdornment="$" variant="info">
      <strong>Info</strong> with $ as end adornment
    </StatCard>

    <StatCard value={10} variant="success">
      Success example with dummy text
    </StatCard>

    <StatCard value={-300} endAdornment="%" variant="warning">
      Warning with % and some dummy text
    </StatCard>

    <StatCard value={100} endAdornment="$" variant="error">
      Error with $ and small value
    </StatCard>

    <StatCard value={100} endAdornment="$" variant="error">
      Error with $ and small value
    </StatCard>
  </StatsSection>
);
