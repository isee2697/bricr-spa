import { ReactNode } from 'react';

export type ToolbarButtonProps = {
  children: ReactNode;
  onClick: VoidFunction;
  active: boolean;
};
