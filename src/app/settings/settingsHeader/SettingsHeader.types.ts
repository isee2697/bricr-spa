import { ReactNode } from 'react';

export type SettingsHeaderProps = SettingHeaderCommonProps & {
  action?: ReactNode;
};

export type SettingHeaderCommonProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
