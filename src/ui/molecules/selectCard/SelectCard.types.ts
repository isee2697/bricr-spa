import { ReactNode } from 'react';

export type SelectCardProps = {
  children: ReactNode;
  onClick: VoidFunction;
  className?: string;
  withButton?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
  selected?: boolean;
  disabled?: boolean;
  adornment?: (selected: boolean) => ReactNode;
};
