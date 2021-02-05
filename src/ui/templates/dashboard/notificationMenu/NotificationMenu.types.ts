import { Notification } from '../../../../api/types';

export type NotificationRow = Pick<
  Notification,
  'id' | 'type' | 'receiver' | 'isRead' | 'isDeleted' | 'description' | 'dateCreated' | 'createdBy' | 'linkedEntity'
>;

export type NotificationsGroupObject = {
  [key: string]: NotificationRow[];
};

export type NotificationsGroup = {
  title: string;
  items: NotificationRow[];
};
