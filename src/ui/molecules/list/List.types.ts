import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type SortOption = {
  name: string;
  key: string;
};

type RenderItem<T> = (item: T, isSelected: boolean) => React.ReactElement;

export type ListProps<T> = {
  items: T[];
  itemIndex: keyof T;
  renderItem: RenderItem<T>;
  onBulk: (selectedItems: T[]) => void;
  sortOptions: SortOption[];
  onSort: (key: string) => void;
  pagination: PaginationProps;
  loading?: boolean;
  loadingItem?: React.ReactElement;
  emptyTitle?: string;
  emptyDescription?: string;
};

export type ListHeaderProps = {
  sortOptions: SortOption[];
  checkedKeys: string[];
  checkAllStatus: {
    indeterminate: boolean;
    checked: boolean;
  };
  onCheckAll: () => void;
  onBulk: () => void;
  onSort: (key: string) => void;
};

export type ListRowProps<T> = {
  checked: boolean;
  onCheck: () => void;
  item: T;
  renderItem: RenderItem<T>;
};
