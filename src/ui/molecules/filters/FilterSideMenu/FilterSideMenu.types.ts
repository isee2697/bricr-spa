import { ReactNode } from 'react';
import { ChangeEvent } from 'react';

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
  title?: string;
};

export type MenuGroup = {
  isCollapsable?: boolean;
  key?: string;
  items: MenuItem[];
};

export type ChangeValue = {
  menu: object;
  submenu: object;
};

export type SidebarMenuProps = {
  onHide: VoidFunction;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isVisible: boolean;
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
