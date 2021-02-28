import { ReactNode } from 'react';

export type ListTableCell<T> = {
  field: keyof T;
  label?: string;
  sortable?: boolean;
};

export type ListTableItemProps<T> = {
  className?: string;
  headerCells: ListTableCell<T>[];
  isHeader?: true;
  renderCell?: (fieldName: keyof T, item?: T) => string;
  item?: T;
  onSort?: (key: keyof T) => void;
  sortKey?: keyof T;
  sortDirection?: 'up' | 'down';
};
