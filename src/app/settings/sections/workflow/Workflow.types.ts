import { ReactNode } from 'react';
import { AnyObject } from 'final-form';

import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';
import { WorkflowSection } from './workflowSection/WorkflowSection.types';

export type TriggerStatus = 'active' | 'inactive';

export type ActionStatus = 'active' | 'inactive';

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
  id: string;
  title: string;
  icon: ReactNode;
  status?: TriggerStatus;
  newActions?: TriggerActionGroup;
  updateActions?: TriggerActionGroup;
  deleteActions?: TriggerActionGroup;
  conditions?: AnyObject;
  conditionAmount?: number;
};

export type ActionSetting = {
  setting?: string;
};

export type Action = {
  id: string;
  title: string;
  icon: ReactNode;
  status?: ActionStatus;
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
  initValues: WorkflowSection[];
  onAddSection: () => Promise<undefined | { error: boolean }>;
  onAddItem: (data: AddItemData) => Promise<undefined | { error: boolean }>;
};
