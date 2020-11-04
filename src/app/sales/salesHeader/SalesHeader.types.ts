import { ReactNode } from 'react';

export type SalesHeaderProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  actions?: ReactNode;
};
