import { ReactNode } from 'react';

export type TileCheckboxProps = {
  onClick: () => void;
  isSelected: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  title: string;
};
