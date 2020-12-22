import { ReactNode } from 'react';

import {
  WorkflowActionGroup,
  WorkflowAction,
  WorkflowTrigger,
  WorkflowSection as WorkflowSectionType,
  WorkflowTriggerType,
  WorkflowActionGroupType,
  WorkflowActionType,
  CreateWorkflowSectionInput,
  UpdateWorkflowActionInput,
  UpdateWorkflowTriggerInput,
} from 'api/types';

import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';
import { TriggerConditionValuesType } from './workflowConditions/triggerConditions/TriggerConditions.types';

export type WorkflowActionGroupWithActions = WorkflowActionGroup & {
  actions: WorkflowAction[];
};

export type WorkflowTriggerWithActionGroups = WorkflowTrigger & {
  actionGroups: WorkflowActionGroupWithActions[];
};

export type WorkflowSectionWithInfo = WorkflowSectionType & {
  triggers: WorkflowTriggerWithActionGroups[];
};

export type WorkflowItemStatus = 'active' | 'inactive';

export enum WorkflowItemType {
  TRIGGER = 'Trigger',
  ACTION = 'Action',
}

export type AddItemData = {
  item: Trigger | Action;
  type: WorkflowItemType;
  parentId?: string;
  sectionId: string;
};

export type TriggerActionGroup = {
  id: string;
  rule?: string;
  actions?: Action[];
};

export type Trigger = {
  id: WorkflowTriggerType;
  title: string;
  icon: ReactNode;
  status?: WorkflowItemStatus;
  newActions?: TriggerActionGroup;
  updateActions?: TriggerActionGroup;
  deleteActions?: TriggerActionGroup;
  conditions?: TriggerConditionValuesType;
};

export type ActionSetting = {
  setting?: string;
};

export type Action = {
  id: WorkflowActionType;
  title: string;
  icon: ReactNode;
  status?: WorkflowItemStatus;
  nextAction?: Action;
  settings?: ActionSetting[];
};

export type WorkflowProps = {
  onToggleFullScreen: (isFullScreen: boolean) => void;
  name: string;
  iconName: string;
  isNew?: boolean;
  goBack: VoidFunction;
  triggersGroups: WorkflowSidebarGroup[];
  actionsGroups: WorkflowSidebarGroup[];
  workflowSections: WorkflowSectionWithInfo[];
  expandedSection?: WorkflowSectionWithInfo;
  onAddSection: (section: CreateWorkflowSectionInput) => Promise<undefined | { error: boolean }>;
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
