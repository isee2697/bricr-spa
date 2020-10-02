import { ApolloError } from '@apollo/client';

import { Notification } from '../../api/types';

export type NotificationRow = Pick<Notification, 'id' | 'type' | 'description' | 'isRead' | 'dateCreated'>;

export type NotificationsProps = {
  notifications: NotificationRow[];
  error: ApolloError | undefined;
  onReadNotification: (notificationId: string) => void;
  onDeleteNotification: (notificationId: string) => void;
};
