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
  onSort?: (key: string) => void;
  sortKey?: string;
  sortDirection?: 'up' | 'down';
};
