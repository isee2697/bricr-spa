import { ReactElement } from 'react';

import { ActionModalAction } from 'ui/organisms/actionModal/ActionModal.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { CheckboxProps } from 'ui/atoms/checkbox/Checkbox.types';
import { BulkOperations } from 'api/types';

export type SortOption = {
  name: string;
  key: string;
};

type RenderItem<T> = (item: T, isSelected: boolean, checkbox: ReactElement) => ReactElement;

export type TableListProps<T> = {
  items: T[];
  itemIndex: keyof T;
  header?: ReactElement;
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
  onOperation?: (operation: BulkOperations, selectedItems: T[]) => Promise<undefined>;
  onBulk?: (selectedItems: T[], values: Record<string, string | string[]>) => Promise<undefined>;
  renderDeleteTitle?: (item: T) => string;
  bulkActions?: ActionModalAction[];
  onBulkOpen?: (selectedItems: T[]) => void;
  bulkData?: Record<string, string | string[]> | null;
  bulkTitle?: string;
  bulkSubmitText?: string;
  isShowHeader?: boolean;
};

export type TableListHeaderProps = {
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
