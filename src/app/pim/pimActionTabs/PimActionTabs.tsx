import React from 'react';

import { useLocale } from 'hooks';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { PimActionTabsProps } from './PimActionTabs.types';

export const PimActionTabs = ({ status, onStatusChange, amounts }: PimActionTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: 'actionRequired',
      amount: 10,
      hasBadge: true,
      badgeColor: 'secondary',
      label: formatMessage({ id: 'pim.status.action_required' }),
    },
    {
      className: 'pim-tab-active',
      value: 'active',
      amount: amounts && amounts.active,
      label: formatMessage({ id: 'pim.status.active' }),
    },
    {
      className: 'pim-tab-archived',
      value: 'archived',
      amount: amounts && amounts.archived,
      label: formatMessage({ id: 'pim.status.archived' }),
    },
  ];

  return <ActionTabs status={status} className="pim-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
