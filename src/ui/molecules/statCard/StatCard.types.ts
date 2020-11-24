import { ReactNode } from 'react';

export type StatCardVariant = 'info' | 'success' | 'warning' | 'error';

export type StatCardProps = {
  children: ReactNode;
  value: number;
  variant?: StatCardVariant;
  endAdornment?: ReactNode;
  optionalValue?: number;
  optionalValueEndAdornment?: ReactNode;
  showStatIcon?: boolean;
  placeholder?: string;
};
