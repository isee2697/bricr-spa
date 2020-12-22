import { ReactNode } from 'react';

export type SubSectionHeaderProps = {
  children: ReactNode;
  onOptionsClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onToggleClick: VoidFunction;
  toggled?: boolean;
  className?: string;
  counter?: number;
  customOption?: ReactNode;
};
