import React from 'react';

import { ActionTabs } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { DmsTemplatesTabsProps } from './DmsTemplatesTabs.types';

export const DmsTemplatesTabs = ({ status, onStatusChange, amounts }: DmsTemplatesTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: 'active',
      amount: amounts && amounts.active,
      label: formatMessage({ id: 'dms.templates.active' }),
    },
    {
      value: 'inactive',
      amount: amounts && amounts.inactive,
      label: formatMessage({ id: 'dms.templates.inactive' }),
    },
  ];

  return <ActionTabs status={status} className="dms-templates-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
