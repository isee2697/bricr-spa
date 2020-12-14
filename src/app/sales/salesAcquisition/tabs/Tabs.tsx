import React from 'react';

import { useLocale } from 'hooks';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs } from 'ui/molecules';
import { SalesStatus } from 'api/types';

import { SalesAcquisitionTabsProps } from './Tabs.types';

export const SalesAcquisitionTabs = ({ status, onStatusChange, amounts }: SalesAcquisitionTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: SalesStatus.ActionRequired,
      amount: amounts && amounts.actionRequired,
      hasBadge: true,
      badgeColor: 'error',
      label: formatMessage({ id: 'common.status.action_required' }),
    },
    {
      value: SalesStatus.Active,
      amount: amounts && amounts.active,
      hasBadge: true,
      label: formatMessage({ id: 'common.status.active' }),
    },
    {
      value: SalesStatus.Inactive,
      amount: amounts && amounts.withdrawn,
      hasBadge: true,
      label: formatMessage({ id: 'common.status.withdrawn' }),
    },
  ];

  return <ActionTabs status={status} className="pim-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
