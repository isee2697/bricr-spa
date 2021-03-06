import { EmailFolderListItem, NylasAccountItem } from 'api/types';

export type EmailInboxContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
  path: string;
};

export type EmailInboxProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
  folders: EmailFolderListItem[];
  path: string;
};
