import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';

export type WorkflowProps = {
  onToggleFullScreen: (isFullScreen: boolean) => void;
  name: string;
  iconName: string;
  goBack: VoidFunction;
  triggersGroups: WorkflowSidebarGroup[];
  actionsGroups: WorkflowSidebarGroup[];
};
