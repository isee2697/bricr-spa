import { EmailFolderListItem, EmailListItem, NylasAccountItem } from 'api/types';

export type InboxFolderProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
  folders: EmailFolderListItem[];
  currentFolder?: EmailFolderListItem;
  emails: EmailListItem[];
};

export type InboxFolderContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
  folders: EmailFolderListItem[];
};
