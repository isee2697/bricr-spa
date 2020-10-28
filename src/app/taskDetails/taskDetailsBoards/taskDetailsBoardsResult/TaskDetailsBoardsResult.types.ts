import { Task } from 'api/types';

export enum TaskDetailsBoardsResultTab {
  ResultIntern = 0,
  ResultClient = 1,
}

export type TaskDetailsBoardsResultProps = {
  task: Task;
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
};
