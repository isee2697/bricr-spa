import { AnyObject } from 'final-form';

import { TriggerStatus } from '../../Workflow.types';
import { DndItemProps } from '../WorkflowItems.types';

export interface TriggerItemProps extends DndItemProps {
  status?: TriggerStatus;
  conditions?: AnyObject;
  conditionAmount?: number;
  onStatusChange?: () => void;
  onDelete?: () => void;
  onShowConditions?: () => void;
}
