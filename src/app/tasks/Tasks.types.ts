import { User } from './tasksMemberList/TasksMemberList.types';
import { TaskPriority, TaskStatus } from './Tasks.enum';

export type TasksProps = {
  selectedUsers: string[];
  isError: boolean;
};

export type Task = {
  id: string;
  title: string;
  priority: TaskPriority;
  assignedTo: User;
  expireDate: Date;
  status: TaskStatus;
};
