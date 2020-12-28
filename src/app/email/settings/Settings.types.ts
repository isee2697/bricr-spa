import { DateTime } from 'luxon';

import { NylasAccountItem } from 'api/types';

export type EmailSettingsProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
};

export type EmailSettingsContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
};

export type Inbox = {
  id: string;
  name: string;
  mainEmailAddress: string;
  dateCreated: DateTime;
};
