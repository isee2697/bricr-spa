import { NotificationsListSortOption } from '../NotificationsList.types';

export type NotificationsListHeaderProps = {
  sortOptions: NotificationsListSortOption[];
  checkedKeys: string[];
  disabled?: boolean;
  onCheckAll: VoidFunction;
  onSort: (key: string) => void;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
  onBulk: VoidFunction;
  checkAllStatus: {
    indeterminate: boolean;
    checked: boolean;
  };
};
