import { TaskStatus, TaskSummaryByStatusResult } from 'api/types';
import { TaskItem, TasksTab } from '../Tasks.types';

export type TasksSwimlaneProps = {
  tab: TasksTab;
  tasks: TaskItem[];
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => void;
  tasksSummaryByStatus: TaskSummaryByStatusResult;
};
