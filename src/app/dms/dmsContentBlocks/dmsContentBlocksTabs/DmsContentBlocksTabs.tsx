import React from 'react';

import { ActionTabs } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { DmsContentBlocksTabsProps } from './DmsContentBlocksTabs.types';

export const DmsContentBlocksTabs = ({ status, onStatusChange, amounts }: DmsContentBlocksTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: 'active',
      amount: amounts && amounts.active,
      label: formatMessage({ id: 'dms.content_blocks.active' }),
    },
    {
      value: 'inactive',
      amount: amounts && amounts.inactive,
      label: formatMessage({ id: 'dms.content_blocks.inactive' }),
    },
  ];

  return <ActionTabs status={status} className="dms-content-blocks-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
