import { WorkflowActionGroupType, WorkflowActionType, WorkflowTriggerType } from 'api/types';
import { WorkflowTriggerWithActionGroups } from '../Workflow.types';

export type Point = {
  x: number;
  y: number;
};

export type WorkflowCanvasProps = {
  triggers: WorkflowTriggerWithActionGroups[];
  onAddWorkflowTrigger: (type: WorkflowTriggerType) => void;
  onAddWorkflowActionGroupAndAction: (
    workflowTriggerId: string,
    workflowActionGroupType: WorkflowActionGroupType,
    type: WorkflowActionType,
  ) => void;
  onAddWorkflowAction: (workflowTriggerId: string, workflowActionGroupId: string, type: WorkflowActionType) => void;
  onRemoveAction: (actionId: string) => void;
  onRemoveTrigger: (triggerId: string) => void;
};
