import { WorkflowTemplateStatus } from 'api/types';
export type WorkflowTemplatesTabsProps = {
  status: WorkflowTemplateStatus;
  onStatusChange: (status: WorkflowTemplateStatus) => void;
  amounts?: {
    active: number;
    inactive: number;
  };
};
