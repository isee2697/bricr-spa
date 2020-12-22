import {
  UpdateWorkflowActionInput,
  UpdateWorkflowTriggerInput,
  WorkflowActionGroupType,
  WorkflowActionType,
  WorkflowTriggerType,
} from 'api/types';
import { WorkflowSectionWithInfo } from '../Workflow.types';

export type WorkflowSectionExpandedProps = {
  section: WorkflowSectionWithInfo;
  onCollapse: VoidFunction;
  onSettings: VoidFunction;
  onAddWorkflowTrigger: (
    workflowSectionId: string,
    triggerType: WorkflowTriggerType,
  ) => Promise<undefined | { error: boolean }>;
  onAddWorkflowActionGroupAndAction: (
    workflowTriggerId: string,
    workflowActionGroupType: WorkflowActionGroupType,
    type: WorkflowActionType,
  ) => Promise<undefined | { error: boolean }>;
  onAddWorkflowAction: (
    workflowTriggerId: string,
    workflowActionGroupId: string,
    type: WorkflowActionType,
  ) => Promise<undefined | { error: boolean }>;
  onRemoveAction: (actionId: string) => void;
  onRemoveTrigger: (triggerId: string) => void;
  onUpdateAction: (actionId: string, action: UpdateWorkflowActionInput) => void;
  onUpdateTrigger: (triggerId: string, trigger: UpdateWorkflowTriggerInput) => void;
};
