import { Trigger, Action, WorkflowItemType } from '../../Workflow.types';

export type WorkflowSidebarItemProps = {
  item: Trigger | Action;
  type: WorkflowItemType;
  searchValue: string;
};
