import { ReactNode } from 'react';

export type HeaderProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  actions?: ReactNode;
};
