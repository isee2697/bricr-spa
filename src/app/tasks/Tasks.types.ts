import { DateTime } from 'luxon';

import { User } from './tasksMemberList/TasksMemberList.types';
import { TaskPriority, TaskStatus, TaskLabel } from './Tasks.enum';

export type TasksProps = {
  selectedUsers: string[];
  isError: boolean;
};

export type Task = {
  id: number;
  taskId: string;
  title: string;
  priority: TaskPriority;
  assignedTo: User;
  label: TaskLabel;
  startDate: DateTime;
  expireDate: DateTime;
  deadlineDate: DateTime;
  deadlineTime: DateTime;
  status: TaskStatus;
};
