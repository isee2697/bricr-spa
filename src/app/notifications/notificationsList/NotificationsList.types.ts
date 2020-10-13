import { ReactElement } from 'react';
import { NotificationRow } from '../Notifications.types';

export type NotificationsListSortOption = {
  name: string;
  key: string;
};

export type NotificationsGroupObject = {
  [key: string]: NotificationRow[];
};

export type NotificationsGroup = {
  title: string;
  items: NotificationRow[];
};

export type NotificationsListProps = {
  notifications: NotificationRow[];
  onReadNotification: (notificationId: string) => void;
  onDeleteNotification: (notificationId: string) => void;
  onBulkReadNotifications: (notificationIds: string[]) => void;
  onBulkDeleteNotifications: (notificationIds: string[]) => void;
  className?: string;
  loading?: boolean;
  loadingItem?: ReactElement;
  disabled?: boolean;
};
