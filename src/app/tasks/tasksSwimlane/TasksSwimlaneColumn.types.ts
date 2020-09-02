import { TaskStatus } from '../Tasks.enum';
import { Task } from '../Tasks.types';

export type TasksSwimlaneColumnProps = {
  columnType: TaskStatus;
  tasks: Task[];
};
