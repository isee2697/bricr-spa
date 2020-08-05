import { ReactElement } from 'react';

import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { CheckboxProps } from 'ui/atoms/checkbox/Checkbox.types';

export type SortOption = {
  name: string;
  key: string;
};

type RenderItem<T> = (item: T, isSelected: boolean, checkbox: ReactElement) => ReactElement;

export type ListProps<T> = {
  items: T[];
  itemIndex: keyof T;
  renderItem: RenderItem<T>;
  sortOptions?: SortOption[];
  pagination?: PaginationProps;
  loading?: boolean;
  loadingItem?: ReactElement;
  emptyTitle?: string;
  emptyDescription?: string;
  className?: string;
  checkboxProps?: CheckboxProps;
  disabled?: boolean;
  onSort?: (key: string) => void;
  onArchive?: (selectedItems: T[]) => void;
  onDelete?: (selectedItems: T[]) => void;
  onBulk: (selectedItems: T[]) => void;
};

export type ListHeaderProps = {
  sortOptions: SortOption[];
  checkedKeys: string[];
  checkAllStatus: {
    indeterminate: boolean;
    checked: boolean;
  };
  disabled?: boolean;
  onCheckAll: VoidFunction;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
  onBulk: VoidFunction;
  onSort: (key: string) => void;
};
