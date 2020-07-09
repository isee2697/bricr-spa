import React from 'react';

import { Tabs, Tab, Badge } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { ActionTabsProps } from './ActionTabs.types';

export const ActionTabs = ({ status, onStatusChange, amounts }: ActionTabsProps) => {
  const { formatMessage } = useLocale();

  return (
    <Tabs
      className="pim-tabs"
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
              {formatMessage({ id: 'pim.status.action_required' })}
            </Badge>
          ) : (
            formatMessage({ id: 'pim.status.action_required' })
          )
        }
      />
      <Tab
        className="pim-tab-active"
        value="active"
        label={formatMessage({ id: 'pim.status.active' }) + (amounts ? ` (${amounts.active})` : '')}
      />
      <Tab
        className="pim-tab-archived"
        value="archived"
        label={formatMessage({ id: 'pim.status.archived' }) + (amounts ? ` (${amounts.archived})` : '')}
      />
    </Tabs>
  );
};
