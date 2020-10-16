import { WorkflowItemType, Action, Trigger } from '../../Workflow.types';

export type DragObjectType = {
  type: string;
} & (Action | Trigger);

export type DropablePlaceholderCollectProps = {
  isOver: boolean;
  isDrag: boolean;
};

export type DropablePlaceholderProps = {
  type: WorkflowItemType;
  hidePlaceholder?: boolean;
  onDrop: (item: Trigger | Action) => void | undefined;
};
