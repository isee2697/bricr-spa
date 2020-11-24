import { TaskItem, TasksTab } from '../Tasks.types';

import { GroupTaskItem } from './TasksSwimlane.types';

export type TasksSwimlaneItemProps = {
  tab: TasksTab;
  task: GroupTaskItem;
};

export type TasksSwimlaneItemDnd = {
  id: string;
  task: TaskItem;
};
