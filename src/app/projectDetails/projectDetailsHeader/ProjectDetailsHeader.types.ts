import { ReactNode } from 'react';

export type ProjectDetailsHeaderProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  title?: string;
  action?: ReactNode;
};
