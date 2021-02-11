import { ApolloError } from '@apollo/client';

import { Notification } from '../../api/types';

export type NotificationsProps = {
  notifications: Notification[];
  error: ApolloError | undefined;
  onReadNotification: (notificationId: string) => void;
  onDeleteNotification: (notificationId: string) => void;
  onBulkReadNotifications: (notificationIds: string[]) => void;
  onBulkDeleteNotifications: (notificationIds: string[]) => void;
};
