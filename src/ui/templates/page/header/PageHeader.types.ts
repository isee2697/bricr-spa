import { ReactNode } from 'react';

export type PageHeaderProps = {
  customAction?: ReactNode;
  onAction?: VoidFunction;
  actionText?: string;
  actionIcon?: ReactNode;
};
