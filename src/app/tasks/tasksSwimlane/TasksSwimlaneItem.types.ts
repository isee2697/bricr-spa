import { TaskItem, TasksTab } from '../Tasks.types';

export type TasksSwimlaneItemProps = {
  tab: TasksTab;
  task: TaskItem;
};

export type TasksSwimlaneItemDnd = {
  id: string;
  task: TaskItem;
};
