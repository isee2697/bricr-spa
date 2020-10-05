import { WorkflowItem } from '../WorkflowTemplates.types';

export type WorkflowTemplatesItemProps = {
  template: WorkflowItem;
  onCopyToCustom: () => void;
  onStatusChange: () => void;
};
