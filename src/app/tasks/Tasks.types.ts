import { User } from './tasksMemberList/TasksMemberList.types';
import { TaskPriority, TaskStatus, TaskLabel } from './Tasks.enum';

export type TasksProps = {
  selectedUsers: string[];
  isError: boolean;
};

export type Task = {
  id: string;
  title: string;
  priority: TaskPriority;
  assignedTo: User;
  label: TaskLabel;
  startDate: Date;
  expireDate: Date;
  deadlineDate: Date;
  deadlineTime: Date;
  status: TaskStatus;
};
