import { DateTime } from 'luxon';

import { Task, TaskPriority } from 'api/types';

export type TaskDetailsUpdateModalProps = {
  task: Task;
  isOpen: boolean;
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
  onClose: VoidFunction;
};

export type TaskDetailsUpdateBody = {
  startDate: DateTime;
  startTime: DateTime;
  deadlineDate: DateTime;
  deadlineTime: DateTime;
  priority: TaskPriority;
};
