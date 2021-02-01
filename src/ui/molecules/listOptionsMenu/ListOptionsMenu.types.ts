import { ReactNode } from 'react';

export type ListOptionsMenuProps = {
  id?: string;
  onEditClick?: VoidFunction;
  hideEditButton?: boolean;
  hideDeleteButton?: boolean;
  onDeleteClick?: VoidFunction;
  editText?: string;
  deleteText?: string;
  children?: ReactNode;
};
