import React from 'react';

import { ActionTabs } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { WorkflowTemplateStatus } from 'api/types';

import { WorkflowTemplatesTabsProps } from './WorkflowTemplatesTabs.types';

export const WorkflowTemplatesTabs = ({ status, onStatusChange, amounts }: WorkflowTemplatesTabsProps) => {
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: WorkflowTemplateStatus.Active,
      amount: amounts && amounts.active,
      label: formatMessage({ id: 'settings.workflow_templates.active' }),
    },
    {
      value: WorkflowTemplateStatus.Inactive,
      amount: amounts && amounts.inactive,
      label: formatMessage({ id: 'settings.workflow_templates.inactive' }),
    },
  ];

  return <ActionTabs status={status} className="workflow-templates-tabs" onStatusChange={onStatusChange} tabs={tabs} />;
};
