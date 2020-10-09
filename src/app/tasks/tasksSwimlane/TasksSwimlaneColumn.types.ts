import { Task, TaskStatus } from 'api/types';
import { TasksTab } from '../Tasks.types';

export type TasksSwimlaneColumnProps = {
  tab: TasksTab;
  columnType: TaskStatus;
  tasks: Task[];
  count: number;
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => void;
};

export type TasksSwimlaneItemDragObject = Task & {
  type: string;
};
