import { NotificationsGroup } from '../NotificationsList.types';
import { Profile, Scalars, TaskLabel, TaskPriority, TaskStatus } from 'api/types';

export type GroupProps = {
  group: NotificationsGroup;
  checkedKeys: string[];
  onCheck: (key: string) => void;
  onReadNotification: (notificationId: string) => void;
  onDeleteNotification: (notificationId: string) => void;
};

export type TaskAssignedNotificationGroupItemProps = {
  data: TaskAssignedNotification;
  dateCreated: Scalars['Date'];
  onNavigate: (path: string) => void;
};

export type TaskAssignedNotification = {
  id: string;
  title: string;
  startDate: string;
  deadline: string;
  priority: TaskPriority;
  label: TaskLabel;
  status: TaskStatus;
  description: string;
  createdBy: Profile;
};
