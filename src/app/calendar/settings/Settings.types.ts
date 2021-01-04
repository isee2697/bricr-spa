import { NylasAccountItem } from 'api/types';

export type CalendarSettingsProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
};

export type CalendarSettingsContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
};
