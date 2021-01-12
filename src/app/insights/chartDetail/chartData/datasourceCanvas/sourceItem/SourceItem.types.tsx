import { DndItemProps } from 'app/settings/sections/workflow/workflowItems/WorkflowItems.types';

export interface TriggerItemProps extends DndItemProps {
  onDelete?: () => void;
}
