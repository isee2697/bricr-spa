import { ReactNode } from 'react';

import { GetTaskQueryHookResult, Profile, Task, TaskStatus } from 'api/types';

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
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
  onAddNewSubtask: (taskId: string, title: string) => void;
  onUpdateSubtaskStatus: (taskId: string, subtaskId: string, status: TaskStatus) => void;
  onDeleteSubtask: (taskId: string, subtaskId: string) => void;
  user: Profile;
  members: Pick<Profile, 'id' | 'firstName' | 'lastName'>[];
};
