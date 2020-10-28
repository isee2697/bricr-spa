import { Task } from 'api/types';

export type TaskDetailsBoardsResultInternProps = {
  task: Task;
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
};
