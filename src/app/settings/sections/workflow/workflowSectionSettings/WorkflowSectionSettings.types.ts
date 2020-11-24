import { WorkflowSection } from '../workflowSection/WorkflowSection.types';

export type WorkflowSectionSettingsProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  workflowSection?: WorkflowSection;
  onSubmit: (workflowSection: WorkflowSection) => void;
};
