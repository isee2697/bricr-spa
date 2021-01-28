import { ReactElement } from 'react';

export type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

export type TableCellMenuProps = {
  id: string;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
};
