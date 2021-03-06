import { WorkflowItemType } from '../../../Workflow.types';

export type ItemPlaceholderProps = {
  type: WorkflowItemType;
  hovered?: boolean;
  isDrag?: boolean;
  disabled?: boolean;
};
