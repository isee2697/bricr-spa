import { EmailListItem, NylasAccountItem } from 'api/types';

export type EmailInboxContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
};

export type EmailInboxProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  emails: EmailListItem[];
  accounts: NylasAccountItem[];
};
