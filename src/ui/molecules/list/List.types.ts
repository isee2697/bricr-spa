import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

type SortOption = {
  name: string;
  key: string;
};

type RenderItem = <T>(item: T, isSelected: boolean) => React.ReactNode;

export type ListProps<T> = {
  items: T[];
  itemIndex: keyof T;
  renderItem: RenderItem;
  onBulk: (selectedItems: T[]) => void;
  sortOptions: SortOption[];
  onSort: (key: string) => void;
  pagination: PaginationProps;
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
  renderItem: RenderItem;
};
