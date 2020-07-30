import { ReactNode } from 'react';

export type MenuItem = {
  key: string;
  subItems?: string[];
  count?: number;
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
    groups: {
      items: MenuItem[];
    }[];
  };
};
