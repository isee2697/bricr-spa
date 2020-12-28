import { EmailFolderListItem, NylasAccountItem } from 'api/types';

export type EmailSidebarMenuContainerProps = {
  onHide: () => void;
  isVisible: boolean;
  accounts: NylasAccountItem[];
};

export type EmailSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  folders: EmailFolderListItem[];
  accounts: NylasAccountItem[];
};

export type EmailSidebarMenuItemProps = {
  value: string;
  count?: number;
};

export type EmailSidebarMenuSubItemProps = {
  id: string;
  title: string;
  selected: boolean;
};
