import { ReactNode } from 'react';

import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';
import { WorkflowSection } from './workflowSection/WorkflowSection.types';

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
  goBack: VoidFunction;
  triggersGroups: WorkflowSidebarGroup[];
  actionsGroups: WorkflowSidebarGroup[];
  onAddSection: () => Promise<undefined | { error: boolean }>;
  sections: WorkflowSection[];
};
