import { DateTime } from 'luxon';

import { NylasAccountItem } from 'api/types';
import { PromiseFunction } from 'app/shared/types';
import { AddNewInboxBody } from '../addNewInboxModal/AddNewInboxModal.types';

export type EmailSettingsProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
  onAddNewInbox: PromiseFunction<AddNewInboxBody>;
};

export type EmailSettingsContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
  onAddedNewAccount: VoidFunction;
};

export type Inbox = {
  id: string;
  name: string;
  mainEmailAddress: string;
  dateCreated: DateTime;
};
