import { ReactNode } from 'react';

export type AvatarRowItemProps = {
  name?: string;
  onDelete?: VoidFunction;
  onClick?: VoidFunction;
  src?: string;
  icon?: ReactNode;
  content?: ReactNode;
};
