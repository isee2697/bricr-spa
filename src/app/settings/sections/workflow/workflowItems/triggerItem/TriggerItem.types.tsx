import { WorkflowItemStatus } from '../../Workflow.types';
import { TriggerConditionValuesType } from '../../workflowConditions/triggerConditions/TriggerConditions.types';
import { DndItemProps } from '../WorkflowItems.types';

export interface TriggerItemProps extends DndItemProps {
  status?: WorkflowItemStatus;
  conditions?: TriggerConditionValuesType;
  onStatusChange?: () => void;
  onDelete?: () => void;
  onShowConditions?: () => void;
}
