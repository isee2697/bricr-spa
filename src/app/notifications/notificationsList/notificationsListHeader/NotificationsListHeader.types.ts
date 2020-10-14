import { NotificationsListSortOption } from '../NotificationsList.types';

export type NotificationsListHeaderProps = {
  sortOptions: NotificationsListSortOption[];
  checkedKeys: string[];
  disabled?: boolean;
  onCheckAll: VoidFunction;
  onSort: (key: string) => void;
  onBulkReadNotifications: () => void;
  onBulkDeleteNotifications: () => void;
  checkAllStatus: {
    indeterminate: boolean;
    checked: boolean;
  };
};
