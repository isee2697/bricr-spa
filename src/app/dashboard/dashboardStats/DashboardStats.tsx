import { useTheme } from '@material-ui/core/styles';
import React from 'react';

import { useLocale } from 'hooks';
import { StatCard } from 'ui/molecules';
import { StatsSection } from 'ui/organisms';

import { DashboardStatsProps } from './DashboardStats.types';

export const DashboardStats = ({ pims, crms, sales, appointments, emails, documents }: DashboardStatsProps) => {
  const theme = useTheme();
  const { formatMessage } = useLocale();

  return (
    <StatsSection width={`calc(100% + ${theme.spacing(3.25)}px`}>
      {pims && (
        <StatCard
          value={pims.value}
          variant={pims.type}
          optionalValue={pims.optionalValue}
          optionalValueEndAdornment="%"
          placeholder={formatMessage({ id: 'dashboard.stats.last_7_days' })}
        >
          {formatMessage({ id: 'dashboard.stats.pims' })}
        </StatCard>
      )}

      {crms && (
        <StatCard
          value={crms.value}
          variant={crms.type}
          optionalValue={crms.optionalValue}
          optionalValueEndAdornment="%"
          placeholder={formatMessage({ id: 'dashboard.stats.last_7_days' })}
        >
          {formatMessage({ id: 'dashboard.stats.crms' })}
        </StatCard>
      )}

      {sales && (
        <StatCard
          value={sales.value}
          variant={sales.type}
          optionalValue={sales.optionalValue}
          optionalValueEndAdornment="%"
          placeholder={formatMessage({ id: 'dashboard.stats.last_7_days' })}
        >
          {formatMessage({ id: 'dashboard.stats.sales' })}
        </StatCard>
      )}

      {appointments && (
        <StatCard
          value={appointments.value}
          variant={appointments.type}
          optionalValue={appointments.optionalValue}
          optionalValueEndAdornment="%"
          placeholder={formatMessage({ id: 'dashboard.stats.last_7_days' })}
        >
          {formatMessage({ id: 'dashboard.stats.appointments' })}
        </StatCard>
      )}

      {emails && (
        <StatCard
          value={emails.value}
          variant={emails.type}
          optionalValue={emails.optionalValue}
          optionalValueEndAdornment="%"
          placeholder={formatMessage({ id: 'dashboard.stats.last_7_days' })}
        >
          {formatMessage({ id: 'dashboard.stats.emails' })}
        </StatCard>
      )}

      {documents && (
        <StatCard
          value={documents.value}
          variant={documents.type}
          optionalValue={documents.optionalValue}
          optionalValueEndAdornment="%"
          placeholder={formatMessage({ id: 'dashboard.stats.last_7_days' })}
        >
          {formatMessage({ id: 'dashboard.stats.documents' })}
        </StatCard>
      )}
    </StatsSection>
  );
};
