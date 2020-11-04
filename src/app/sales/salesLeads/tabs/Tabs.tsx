import React from 'react';

import { useLocale } from 'hooks';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs } from 'ui/molecules';

import { SalesLeadsTabsProps } from './Tabs.types';

export const SalesLeadsTabs = ({ status, onStatusChange, amounts }: SalesLeadsTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: 'actionRequired',
      amount: amounts && amounts.actionRequired,
      hasBadge: true,
      badgeColor: 'error',
      label: formatMessage({ id: 'sales.leads.status.action_required' }),
    },
    {
      value: 'withdrawn',
      amount: amounts && amounts.withdrawn,
      hasBadge: true,
      label: formatMessage({ id: 'sales.leads.status.withdrawn' }),
    },
  ];

  return <ActionTabs status={status} className="pim-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
