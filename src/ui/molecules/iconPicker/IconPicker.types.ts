import { ReactNode } from 'react';

export interface IconPickerIcon {
  name: string;
  icon: ReactNode;
}

export type IconPickerProps = {
  name: string;
  iconList: IconPickerIcon[];
  size?: number;
  color?: string;
  selectedTheme?: IconSelectedTheme;
};

export enum IconSelectedTheme {
  DEFAULT = 'Default',
  RED = 'Red',
  ORANGE = 'Orange',
  YELLOW = 'Yellow',
  PURPLE = 'Purple',
  GREEN = 'Green',
  BLUE = 'Blue',
}
