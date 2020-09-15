import { ReactNode } from 'react';

import { GetTaskQuery, GetTaskQueryHookResult, Profile, Task } from 'api/types';

export type TaskDetailsProps = Pick<GetTaskQueryHookResult, 'error' | 'data'> & {
  data?: GetTaskQuery;
  breadcrumbs: ReactNode;
  onUpdateTask: (taskId: string, task: Pick<Task, 'status'>) => void;
  user: Profile;
  members: Pick<Profile, 'id' | 'firstName' | 'lastName'>[];
};
