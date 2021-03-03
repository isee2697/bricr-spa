import { ReactElement, ReactNode } from 'react';

import { ActionModalAction } from 'ui/organisms/actionModal/ActionModal.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { CheckboxProps } from 'ui/atoms/checkbox/Checkbox.types';
import { BulkOperations } from 'api/types';

export type SortOption = {
  name: string;
  key: string;
};
export type BaseListType = { id: string };

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
  selectedItems?: string[];
  onSort?: (key: string) => void;
  onSelectItems?: (key: string[]) => void;
  onOperation?: (operation: BulkOperations, selectedItems: T[]) => Promise<undefined>;
  onBulk?: (selectedItems: T[], values: Record<string, string | string[]>) => Promise<undefined>;
  renderDeleteTitle?: (item: T) => string;
  bulkActions?: ActionModalAction[];
  onBulkOpen?: (selectedItems: T[]) => void;
  bulkData?: Record<string, string | string[]> | null;
  bulkTitle?: string;
  bulkSubmitText?: string;
  isShowHeader?: boolean;
  listIndexHeader?: ReactNode;
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
  onBulk?: VoidFunction;
  bulkComponent?: ReactNode;
  actionButtons?: ReactNode;
  onSort: (key: string) => void;
};
