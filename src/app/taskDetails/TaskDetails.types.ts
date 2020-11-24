import { ReactNode } from 'react';

import { GetTaskQueryHookResult, Profile, Task } from 'api/types';

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
  user: Profile;
  members: Pick<Profile, 'id' | 'firstName' | 'lastName'>[];
};
