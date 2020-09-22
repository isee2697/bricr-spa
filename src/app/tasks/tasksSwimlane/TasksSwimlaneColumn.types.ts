import { Task, TaskStatus } from 'api/types';

export type TasksSwimlaneColumnProps = {
  tab: number;
  columnType: TaskStatus;
  tasks: Task[];
  count: number;
};
