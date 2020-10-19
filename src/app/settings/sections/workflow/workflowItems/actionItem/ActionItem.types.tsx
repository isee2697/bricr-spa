import { ActionSetting, WorkflowItemStatus } from '../../Workflow.types';
import { DndItemProps } from '../WorkflowItems.types';

export interface ActionItemProps extends DndItemProps {
  status?: WorkflowItemStatus;
  settings?: ActionSetting[];
  onStatusChange?: () => void;
  onDelete?: () => void;
  onShowSettings?: () => void;
}
