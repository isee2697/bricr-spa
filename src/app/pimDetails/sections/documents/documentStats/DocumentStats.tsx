import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { StatsSection } from 'ui/organisms';
import { StatCard } from 'ui/molecules';
import { useLocale } from 'hooks';

import { DocumentStatsProps } from './DocumentStats.types';

export const DocumentStats = ({ metaInfo }: DocumentStatsProps) => {
  const theme = useTheme();
  const { formatMessage } = useLocale();

  return (
    <StatsSection width={`calc(100% + ${theme.spacing(3.25)}px`}>
      {metaInfo.map((info, index) => (
        <StatCard
          key={index}
          value={info.value}
          variant={info.type}
          optionalValue={info.percent}
          optionalValueEndAdornment="%"
          placeholder={formatMessage({ id: 'common.previous_last_7_days' })}
        >
          {formatMessage({ id: `pim_details.documents.stat_${info.title}` })}
        </StatCard>
      ))}
    </StatsSection>
  );
};
