import { DateTime } from 'luxon';

import { Profile, GetMyTeamMembersQueryHookResult } from 'api/types';

import { User } from './tasksMemberList/TasksMemberList.types';
import { TaskPriority, TaskStatus, TaskLabel } from './Tasks.enum';

export type TasksProps = Pick<GetMyTeamMembersQueryHookResult, 'loading' | 'error' | 'data'>;

export type Task = {
  id: number;
  taskId: string;
  title: string;
  priority: TaskPriority;
  assignedTo: User;
  label: TaskLabel;
  startDate: DateTime;
  expireDate: DateTime;
  deadlineDate: DateTime;
  deadlineTime: DateTime;
  status: TaskStatus;
};

export type TeamMemberItem = Pick<Profile, 'id' | 'firstName' | 'lastName'>;
