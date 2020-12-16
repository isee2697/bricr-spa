import { ReactNode } from 'react';

import { WorkflowActionType, WorkflowTriggerType } from 'api/types';

export type WorkflowSidebarProps = {
  isFullScreen: boolean;
  triggersGroups: WorkflowSidebarGroup[];
  actionsGroups: WorkflowSidebarGroup[];
};

export type WorkflowSidebarGroup = {
  title: string;
  items: WorkflowSidebarGroupItem[];
};

export type WorkflowSidebarGroupItem = {
  id: WorkflowActionType | WorkflowTriggerType;
  icon: ReactNode;
  title: string;
};
