import { WorkflowSection } from 'api/types';

export type WorkflowSectionSettingsProps = {
  isOpened: boolean;
  templateId: string;
  onClose: VoidFunction;
  workflowSection?: WorkflowSection;
  onSubmit: (workflowSection: WorkflowSection) => void;
};
