import { Profile, Task, TaskStatus, TaskSummaryByStatusResult } from 'api/types';
import { TaskItem, TasksTab } from '../Tasks.types';

export type TasksSwimlaneProps = {
  tab: TasksTab;
  tasks: TaskItem[];
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => void;
  tasksSummaryByStatus: TaskSummaryByStatusResult;
};

export type GroupTaskItem = Task & {
  assigneeDetail?: Pick<Profile, 'id' | 'firstName' | 'lastName'>;
  isUpdating?: boolean;
};

export type GroupTasks = {
  [TaskStatus.ToDo]: GroupTaskItem[];
  [TaskStatus.InProgress]: GroupTaskItem[];
  [TaskStatus.Blocked]: GroupTaskItem[];
  [TaskStatus.Done]: GroupTaskItem[];
};
