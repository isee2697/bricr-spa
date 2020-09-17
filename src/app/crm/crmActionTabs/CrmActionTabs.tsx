import React from 'react';

import { ActionTabs } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { CrmActionTabsProps } from './CrmActionTabs.types';

export const CrmActionTabs = ({ status, onStatusChange, amounts }: CrmActionTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: 'actionRequired',
      amount: amounts && amounts.actionRequired,
      hasBadge: true,
      badgeColor: 'secondary',
      label: formatMessage({ id: 'crm.status.action_required' }),
    },
    {
      value: 'active',
      amount: amounts && amounts.active,
      label: formatMessage({ id: 'crm.status.active' }),
    },
    {
      value: 'inactive',
      amount: amounts && amounts.inactive,
      label: formatMessage({ id: 'crm.status.inactive' }),
    },
  ];

  return <ActionTabs status={status} className="crm-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
