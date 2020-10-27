import { ReactNode } from 'react';

export type SubMenuItem =
  | {
      id: string;
      label?: string;
      title?: string;
      number?: number;
      icon?: ReactNode;
      onClick?: VoidFunction;
    }
  | string;

export type MenuItem = {
  key: string;
  subItems?: SubMenuItem[];
  count?: number;
  icon?: ReactNode;
  title?: string;
  onClick?: VoidFunction;
};

export type MenuGroup = {
  isCollapsable?: boolean;
  key?: string;
  items: MenuItem[];
};

export type SidebarMenuType = {
  url: string;
  back?: {
    url: string;
    title: string;
  };
  groups: MenuGroup[];
};

export type SidebarMenuProps = {
  onHide: VoidFunction;
  isVisible: boolean;
  menuTitle?: ReactNode;
  translationPrefix: string;
  menu: SidebarMenuType;
};
