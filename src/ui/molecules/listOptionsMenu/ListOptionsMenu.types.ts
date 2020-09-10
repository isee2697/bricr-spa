import { ReactNode } from 'react';

export type ListOptionsMenuProps = {
  onEditClick?: VoidFunction;
  hideEditButton?: boolean;
  onDeleteClick?: VoidFunction;
  editText?: string;
  deleteText?: string;
  children?: ReactNode;
};
