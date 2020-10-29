import { Task } from 'api/types';

export type TaskDetailsBoardsResultClientProps = {
  task: Task;
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
};
