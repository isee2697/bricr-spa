import { ReactNode } from 'react';
import { DateTime } from 'luxon';

import { GetTaskQueryHookResult, Profile, Task, TaskLabel, TaskPriority, TaskStatus } from 'api/types';

export type TaskDetailsProps = Pick<GetTaskQueryHookResult, 'error'> & {
  taskData: Pick<
    Task,
    | 'id'
    | 'taskIndex'
    | 'title'
    | 'assignee'
    | 'startDate'
    | 'deadline'
    | 'priority'
    | 'label'
    | 'status'
    | 'description'
  >;
  breadcrumbs: ReactNode;
  onFollowUpTask: (task: FollowUpTaskBody) => void;
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
  onAddNewSubtask: (taskId: string, title: string) => void;
  onUpdateSubtaskStatus: (taskId: string, subtaskId: string, status: TaskStatus) => void;
  onDeleteSubtask: (taskId: string, subtaskId: string) => void;
  user: Profile;
  members: Pick<Profile, 'id' | 'firstName' | 'lastName'>[];
};

export type FollowUpTaskBody = {
  title: string;
  assignee: string;
  label: TaskLabel;
  priority: TaskPriority;
  startDate?: string;
  deadline?: string;
};
