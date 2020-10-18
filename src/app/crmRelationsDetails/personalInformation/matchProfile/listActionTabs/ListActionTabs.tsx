import React from 'react';

import { ActionTabs } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { ListActionTabsProps } from './ListActionTabs.types';

export const ListActionTabs = ({ onProfileIndexChange, profileIndex, profiles }: ListActionTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = profiles.map(profile => ({
    value: profile.id,
    amount: profile.amount,
    hasBadge: true,
    label: formatMessage(
      { id: 'crm.details.match_profile.profile' },
      { date: profile.dateCreated.toFormat('dd-MM-yyyy') },
    ),
  }));

  return <ActionTabs status={profileIndex} onStatusChange={onProfileIndexChange} tabs={tabs} />;
};
