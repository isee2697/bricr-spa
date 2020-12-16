import { WorkflowSectionWithInfo } from '../Workflow.types';

export type WorkflowSectionCollapsedProps = {
  section: WorkflowSectionWithInfo;
  onExpand: VoidFunction;
  onSettings: VoidFunction;
};
