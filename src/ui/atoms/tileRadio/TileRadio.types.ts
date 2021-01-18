import { ReactNode } from 'react';

export type TileRadioProps = {
  onClick: () => void;
  isSelected: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  title: string;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
};
