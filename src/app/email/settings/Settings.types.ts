import { DateTime } from 'luxon';

export type EmailSettingsProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type EmailSettingsContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type Inbox = {
  id: string;
  name: string;
  mainEmailAddress: string;
  dateCreated: DateTime;
};
