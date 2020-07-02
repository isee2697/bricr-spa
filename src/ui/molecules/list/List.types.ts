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
  onBulk: (selectedItems: T[]) => void;
  sortOptions?: SortOption[];
  onSort?: (key: string) => void;
  pagination?: PaginationProps;
  loading?: boolean;
  loadingItem?: ReactElement;
  emptyTitle?: string;
  emptyDescription?: string;
  className?: string;
  checkboxProps?: CheckboxProps;
  disabled?: boolean;
};

export type ListHeaderProps = {
  sortOptions: SortOption[];
  checkedKeys: string[];
  checkAllStatus: {
    indeterminate: boolean;
    checked: boolean;
  };
  disabled?: boolean;
  onCheckAll: () => void;
  onBulk: () => void;
  onSort: (key: string) => void;
};
