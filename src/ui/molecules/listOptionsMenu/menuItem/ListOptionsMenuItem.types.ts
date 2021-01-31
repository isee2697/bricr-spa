import { ReactNode } from 'react';

export type ListOptionsMenuItemProps = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactNode;
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  dataTestId?: string;
  disabled?: boolean;
  className?: string;
};
