import { EmailFolderListItem } from 'api/types';

export type EmailSidebarMenuContainerProps = {
  onHide: () => void;
  isVisible: boolean;
};

export type EmailSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  folders: EmailFolderListItem[];
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
