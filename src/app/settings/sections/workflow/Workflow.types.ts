import { ReactNode } from 'react';

import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';
import { WorkflowSection } from './workflowSection/WorkflowSection.types';

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

export type Trigger = {
  id: string;
  title: string;
  icon: ReactNode;
  actions: Action[];
};

export type Action = {
  id: string;
  title: string;
  icon: ReactNode;
  nextAction?: Action;
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
