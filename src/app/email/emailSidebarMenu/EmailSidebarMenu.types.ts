import { ReactNode } from 'react';

import { EmailFolderListItem, NylasAccountItem } from 'api/types';

export type EmailSidebarMenuContainerProps = {
  onHide: () => void;
  isVisible: boolean;
  accounts: NylasAccountItem[];
  folders?: EmailFolderListItem[];
};

export type EmailSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  folders?: EmailFolderListItem[];
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

export type EmailSidebarMenuType = {
  url: string;
  groups: EmailSidebarMenuGroup[];
};

export type EmailSidebarMenuGroup = {
  id: string;
  email: string;
  items: EmailSidebarMenuItem[];
};

export type EmailSidebarMenuItem = {
  id: string;
  icon: ReactNode;
  count?: number;
  title: string;
  isCollapsable?: boolean;
};
