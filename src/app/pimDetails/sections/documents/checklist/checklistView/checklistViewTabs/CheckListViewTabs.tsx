import React from 'react';

import { useLocale } from 'hooks';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { CheckListViewTabsProps } from './CheckListViewTabs.types';

export const CheckListViewTabs = ({ status, onStatusChange, amounts }: CheckListViewTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: 'actionRequired',
      amount: amounts && amounts.actionRequired,
      hasBadge: true,
      badgeColor: 'secondary',
      label: formatMessage({ id: 'checklist.status.action_required' }),
    },
    {
      className: 'checklist-tab-active',
      value: 'active',
      amount: amounts && amounts.active,
      label: formatMessage({ id: 'checklist.status.active' }),
    },
    {
      className: 'checklist-tab-archived',
      value: 'archived',
      amount: amounts && amounts.archived,
      label: formatMessage({ id: 'checklist.status.archived' }),
    },
  ];

  return <ActionTabs status={status} className="checklist-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
