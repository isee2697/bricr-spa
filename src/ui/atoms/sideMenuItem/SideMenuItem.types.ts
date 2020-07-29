import { ReactNode, ReactNodeArray } from 'react';

export type SideMenuItemProps = {
  icon?: ReactNode;
  title: ReactNode | string;
  selected: boolean;
  badge?: number;
  onClick?: () => void;
  children?: ReactNodeArray;
  className?: string;
};
