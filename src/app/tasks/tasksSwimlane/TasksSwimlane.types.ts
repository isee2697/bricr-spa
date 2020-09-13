import { TaskStatus } from 'api/types';
import { TaskItem } from '../Tasks.types';

export type TasksSwimlaneProps = {
  tasks: TaskItem[];
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => any;
};
