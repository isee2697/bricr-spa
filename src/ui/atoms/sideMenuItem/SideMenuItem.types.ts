import { ReactNode, ReactNodeArray } from 'react';

export type SideMenuItemProps = {
  icon?: ReactNode;
  title: ReactNode | string;
  selected: boolean;
  onClick?: () => void;
  children?: ReactNodeArray;
  className?: string;
};
