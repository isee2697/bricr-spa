import { Trigger, AddItemData } from '../Workflow.types';

export type WorkflowSection = {
  id: string;
  title: string;
  trigger?: Trigger;
};

export type WorkflowSectionProps = {
  section: WorkflowSection;
  expanded: boolean;
  onExpanded: VoidFunction;
  onAddItem: (data: AddItemData) => void;
};
