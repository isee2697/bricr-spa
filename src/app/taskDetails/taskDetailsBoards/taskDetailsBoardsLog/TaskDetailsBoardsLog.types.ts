import { Task } from 'api/types';

export type TaskDetailsBoardsLogProps = {
  task: Task;
};

export enum TaskDetailsBoardsLogTab {
  Discussion = 0,
  History = 1,
}
