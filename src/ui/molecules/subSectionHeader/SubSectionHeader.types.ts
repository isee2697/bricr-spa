import { ReactNode } from 'react';

export type SubSectionHeaderProps = {
  children: ReactNode;
  onOptionsClick: VoidFunction;
  onToggleClick: VoidFunction;
  toggled?: boolean;
  className?: string;
};
