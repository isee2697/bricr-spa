import { ReactElement } from 'react';

import { Notification } from 'api/types';

export type NotificationsListSortOption = {
  name: string;
  key: string;
};

export type NotificationsGroupObject = {
  [key: string]: Notification[];
};

export type NotificationsGroup = {
  title: string;
  items: Notification[];
};

export type NotificationsListProps = {
  notifications: Notification[];
  onReadNotification: (notificationId: string) => void;
  onDeleteNotification: (notificationId: string) => void;
  onBulkReadNotifications: (notificationIds: string[]) => void;
  onBulkDeleteNotifications: (notificationIds: string[]) => void;
  className?: string;
  loading?: boolean;
  loadingItem?: ReactElement;
  disabled?: boolean;
};
