import { Task, TaskStatus } from 'api/types';

export type TasksSwimlaneColumnProps = {
  columnType: TaskStatus;
  tasks: Task[];
};
