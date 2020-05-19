import { ReactNode } from 'react';

export type SideSubMenuItemProps = {
  title: ReactNode;
  selected: boolean;
  onClick?: () => void;
};
