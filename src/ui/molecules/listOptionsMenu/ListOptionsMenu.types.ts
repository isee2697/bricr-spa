import { ReactNode } from 'react';

export type ListOptionsMenuProps = {
  onEditClick: VoidFunction;
  onDeleteClick?: VoidFunction;
  children?: ReactNode;
};
