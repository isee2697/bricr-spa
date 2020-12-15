import { DateTime } from 'luxon';

export type CalendarSettingsProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type CalendarSettingsContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type CalendarAccount = {
  id: string;
  name: string;
  mainEmailAddress: string;
  dateCreated: DateTime;
};
