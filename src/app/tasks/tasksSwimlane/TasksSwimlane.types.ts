import { TaskStatus, TaskSummaryByStatusResult } from 'api/types';
import { TaskItem } from '../Tasks.types';

export type TasksSwimlaneProps = {
  tab: number;
  tasks: TaskItem[];
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => void;
  tasksSummaryByStatus: TaskSummaryByStatusResult;
};
