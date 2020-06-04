import { ReactNode } from 'react';

export type TileButtonProps = {
  onClick: () => void;
  title?: string;
  children?: ReactNode;
  isDisabled?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
};
