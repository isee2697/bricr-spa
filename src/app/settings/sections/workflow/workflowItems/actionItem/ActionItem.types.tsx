import { ActionSetting, ActionStatus } from '../../Workflow.types';
import { DndItemProps } from '../WorkflowItems.types';

export interface ActionItemProps extends DndItemProps {
  status?: ActionStatus;
  settings?: ActionSetting[];
  onStatusChange?: () => void;
  onDelete?: () => void;
  onShowSettings?: () => void;
}
