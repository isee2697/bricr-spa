import React from 'react';

import { useLocale } from 'hooks';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { DocumentStatus } from '../../../general/General.types';

import { DocumentListViewTabsProps } from './DocumentListViewTabs.types';
import { useStyles } from './DocumentListViewTabs.styles';

export const DocumentListViewTabs = ({ status, onStatusChange }: DocumentListViewTabsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const tabs: ActionTab[] = Object.values(DocumentStatus).map(status => ({
    label: formatMessage({ id: `pim_details.documents.status.${status}` }),
    value: status,
    hasBadge: true,
    badgeColor: 'secondary',
  }));

  return (
    <ActionTabs
      status={status}
      classes={{ flexContainer: classes.tabsRoot }}
      onStatusChange={onStatusChange}
      tabs={tabs}
      variant="scrollable"
    />
  );
};
