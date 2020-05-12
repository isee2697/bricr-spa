import React from 'react';

import { Tabs, Tab, Badge } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { PimTabsProps } from './PimTabs.types';

export const PimTabs = ({ status, onStatusChange, amounts }: PimTabsProps) => {
  const { formatMessage } = useLocale();

  return (
    <Tabs
      value={status}
      onChange={(event, value) => onStatusChange(value)}
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab
        value="actionRequired"
        label={
          amounts && amounts.actionRequired ? (
            <Badge badgeContent={amounts.actionRequired} color="secondary">
              {formatMessage({ id: AppMessages['pim.status.action_required'] })}
            </Badge>
          ) : (
            formatMessage({ id: AppMessages['pim.status.action_required'] })
          )
        }
      />
      <Tab
        value="active"
        label={formatMessage({ id: AppMessages['pim.status.active'] }) + (amounts ? ` (${amounts.active})` : '')}
      />
      <Tab
        value="archived"
        label={formatMessage({ id: AppMessages['pim.status.archived'] }) + (amounts ? ` (${amounts.archived})` : '')}
      />
    </Tabs>
  );
};
