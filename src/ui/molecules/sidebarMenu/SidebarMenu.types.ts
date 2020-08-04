import { ReactNode } from 'react';

export type SubMenuItem =
  | {
      id: string;
      label?: string;
      title?: string;
      number?: number;
    }
  | string;

export type MenuItem = {
  key: string;
  subItems?: SubMenuItem[];
  count?: number;
  icon?: ReactNode;
};

export type MenuGroup = {
  isCollapsable?: boolean;
  key?: string;
  items: MenuItem[];
};

export type SidebarMenuProps = {
  onHide: VoidFunction;
  menuTitle?: ReactNode;
  translationPrefix: string;
  menu: {
    url: string;
    back?: {
      url: string;
      title: string;
    };
    groups: MenuGroup[];
  };
};
