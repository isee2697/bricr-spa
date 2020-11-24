import { Task, TaskStatus } from 'api/types';
import { TasksTab } from '../Tasks.types';

import { GroupTaskItem } from './TasksSwimlane.types';

export type TasksSwimlaneColumnProps = {
  tab: TasksTab;
  columnType: TaskStatus;
  tasks: GroupTaskItem[];
  count: number;
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => void;
};

export type TasksSwimlaneItemDragObject = Task & {
  type: string;
};
