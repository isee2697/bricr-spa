import { ReactNode } from 'react';
import { SideMenuItemProps } from '../sideMenuItem/SideMenuItem.types';

export type SideSubMenuItemProps = SideMenuItemProps & {
  title: ReactNode;
  selected: boolean;
  onClick?: () => void;
};
