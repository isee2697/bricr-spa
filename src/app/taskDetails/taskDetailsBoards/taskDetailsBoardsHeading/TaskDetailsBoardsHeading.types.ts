import { Task } from 'api/types';

export type TaskDetailsBoardsHeadingProps = {
  task: Task;
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
};
