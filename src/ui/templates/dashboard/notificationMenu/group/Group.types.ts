import { NotificationsGroup } from '../NotificationMenu.types';
import { TaskAssignedNotification } from 'app/notifications/notificationsList/Group/Group.types';
import { Scalars } from 'api/types';

export type GroupProps = {
  group: NotificationsGroup;
  onReadNotification: (id: string) => void;
};

export type GroupItemProps = {
  data: TaskAssignedNotification;
  dateCreated: Scalars['Date'];
  onNavigate: (path: string) => void;
};
