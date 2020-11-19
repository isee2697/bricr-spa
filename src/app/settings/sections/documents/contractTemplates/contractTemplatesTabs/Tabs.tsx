import React from 'react';

import { useLocale } from 'hooks';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs } from 'ui/molecules';

import { ContractTemplatesTabsProps } from './Tabs.types';
import { useStyles } from './Tabs.styles';

export const ContractTemplatesTabs = ({ status, onStatusChange, amounts }: ContractTemplatesTabsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const tabs: ActionTab[] = [
    {
      value: 'active',
      amount: amounts && amounts.active,
      hasBadge: true,
      label: formatMessage({ id: 'common.status.active' }),
    },
    {
      value: 'inactive',
      amount: amounts && amounts.inactive,
      hasBadge: true,
      label: formatMessage({ id: 'common.status.inactive' }),
    },
  ];

  return (
    <ActionTabs
      status={status}
      className="pim-tabs"
      onStatusChange={onStatusChange}
      tabs={tabs}
      badgeClasses={classes.badge}
    />
  );
};
