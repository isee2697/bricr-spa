import { ReactNode } from 'react';

export type ProjectDetailsHeaderProps = {
  isSidebarVisible?: boolean;
  onOpenSidebar?: VoidFunction;
  title?: string;
  action?: ReactNode;
};
