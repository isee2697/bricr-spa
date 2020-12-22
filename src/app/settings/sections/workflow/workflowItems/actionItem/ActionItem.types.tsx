import { ActionSetting } from '../../Workflow.types';
import { DndItemProps } from '../WorkflowItems.types';

export interface ActionItemProps extends DndItemProps {
  status?: boolean;
  disabled?: boolean;
  settings?: ActionSetting[];
  onStatusChange?: () => void;
  onDelete?: () => void;
  onShowSettings?: () => void;
}
