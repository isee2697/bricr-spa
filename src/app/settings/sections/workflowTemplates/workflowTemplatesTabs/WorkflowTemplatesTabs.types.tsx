import { ActiveTabStatus } from 'app/settings/sections/workflowTemplates/WorkflowTemplates.types';

export type WorkflowTemplatesTabsProps = {
  status: ActiveTabStatus;
  onStatusChange: (status: ActiveTabStatus) => void;
  amounts?: {
    active: number | string;
    inactive: number | string;
  };
};
