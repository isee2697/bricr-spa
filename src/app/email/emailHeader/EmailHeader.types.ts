import { ReactNode } from 'react';

export type EmailHeaderProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  actions?: ReactNode;
};
