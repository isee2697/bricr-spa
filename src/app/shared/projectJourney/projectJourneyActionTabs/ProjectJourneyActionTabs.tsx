import React from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ProjectJourneyActionTabsProps } from '../ProjectJourney.types';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs } from 'ui/molecules';

export const ProjectJourneyActionTabs = ({ status, onStatusChange, amounts }: ProjectJourneyActionTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: 'actionRequired',
      amount: 10,
      hasBadge: true,
      label: formatMessage({ id: 'project_details.project_journey.status.action_required' }),
      badgeColor: 'secondary',
    },
    {
      className: 'project-journey-tab-matches',
      value: 'matches',
      amount: amounts && amounts.matches,
      hasBadge: true,
      label: formatMessage({ id: 'project_details.project_journey.status.matches' }),
    },
    {
      className: 'project-journey-tab-interest',
      value: 'interests',
      amount: amounts && amounts.interests,
      hasBadge: true,
      label: formatMessage({ id: 'project_details.project_journey.status.interests' }),
    },
  ];

  return <ActionTabs status={status} className="project-journey-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
