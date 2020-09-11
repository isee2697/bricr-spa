import { Task, TaskStatus } from 'api/types';

export type TasksSwimlaneProps = {
  tasks: Task[];
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => any;
};
