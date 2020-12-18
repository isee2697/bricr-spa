import { WorkflowTemplate, WorkflowTemplateStatus } from 'api/types';

export type WorkflowTemplatesItemProps = {
  template: WorkflowTemplate;
  onCopyToCustom: () => void;
  onStatusChange: (status: WorkflowTemplateStatus) => void;
};
