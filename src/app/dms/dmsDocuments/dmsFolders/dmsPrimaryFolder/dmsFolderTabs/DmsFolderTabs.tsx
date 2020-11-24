import React from 'react';

import { useLocale } from 'hooks';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { TeamRight } from 'api/types';

import { DmsFolderTabsProps } from './DmsFolderTabs.types';
import { useStyles } from './DmsFolderTabs.styles';

export const DmsFolderTabs = ({ status, onStatusChange }: DmsFolderTabsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const tabs: ActionTab[] = Object.values(TeamRight).map(right => ({
    label: formatMessage({ id: `dictionaries.settings.rights.${right}` }),
    value: right,
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
