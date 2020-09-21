import { TaskItem } from '../Tasks.types';

export type TasksSwimlaneItemProps = {
  tab: number;
  task: TaskItem;
};

export type TasksSwimlaneItemDnd = {
  id: string;
  task: TaskItem;
};
