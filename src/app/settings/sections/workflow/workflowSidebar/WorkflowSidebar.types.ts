import { ReactNode } from 'react';

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
  id: string;
  icon: ReactNode;
  title: string;
};
