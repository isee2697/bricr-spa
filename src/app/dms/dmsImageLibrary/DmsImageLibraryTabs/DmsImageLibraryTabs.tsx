import React from 'react';

import { ActionTabs } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { DmsImageLibraryTabsProps } from './DmsImageLibraryTabs.types';

export const DmsImageLibraryTabs = ({ status, onStatusChange, amounts }: DmsImageLibraryTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: 'active',
      amount: amounts && amounts.active,
      label: formatMessage({ id: 'dms.images.active' }),
    },
    {
      value: 'inactive',
      amount: amounts && amounts.inactive,
      label: formatMessage({ id: 'dms.images.inactive' }),
    },
  ];

  return <ActionTabs status={status} className="dms-images-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
