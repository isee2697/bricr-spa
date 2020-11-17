import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { StatsSection } from 'ui/organisms';
import { StatCard } from 'ui/molecules';
import { useLocale } from 'hooks';

export const Stats = () => {
  const theme = useTheme();
  const { formatMessage } = useLocale();

  return (
    <StatsSection width={`calc(100% + ${theme.spacing(3.25)}px`}>
      <StatCard value={24} variant="success" optionalValue={15} optionalValueEndAdornment="%" showStatIcon={false}>
        {formatMessage({ id: 'project_details.allocate_results_details.allocated_properties' })}
      </StatCard>
      <StatCard value={2} variant="warning" optionalValue={1} optionalValueEndAdornment="%" showStatIcon={false}>
        {formatMessage({ id: 'project_details.allocate_results_details.gold_relations' })}
      </StatCard>
      <StatCard value={126} variant="info" optionalValue={90} optionalValueEndAdornment="%" showStatIcon={false}>
        {formatMessage({ id: 'project_details.allocate_results_details.silver_relations' })}
      </StatCard>
      <StatCard value={4} variant="error" optionalValue={5} optionalValueEndAdornment="%" showStatIcon={false}>
        {formatMessage({ id: 'project_details.allocate_results_details.bronze_relations' })}
      </StatCard>
    </StatsSection>
  );
};
