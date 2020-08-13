import { Trigger } from '../Workflow.types';

export type WorkflowSectionProps = {
  section: WorkflowSection;
  expanded: boolean;
  onExpanded: VoidFunction;
};

export type WorkflowSection = {
  title: string;
  trigger?: Trigger;
};
