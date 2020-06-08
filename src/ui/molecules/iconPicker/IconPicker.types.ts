import { ReactNode } from 'react';

export type IconPickerProps = {
  iconList: ReactNode[];
  selectedIcon: (icon: ReactNode) => void;
  size?: number;
  color?: string;
};
