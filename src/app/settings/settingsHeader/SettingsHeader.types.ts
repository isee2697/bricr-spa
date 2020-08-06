import { ReactNode } from 'react';

export type SettingsHeaderProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  action?: ReactNode;
};
