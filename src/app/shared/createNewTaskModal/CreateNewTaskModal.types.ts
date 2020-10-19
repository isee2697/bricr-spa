import { DateTime } from 'luxon';

import { TeamMemberItem } from 'app/tasks/Tasks.types';
import { TaskLabel, TaskPriority } from 'api/types';

export type CreateNewTaskModalProps = {
  onSubmit: CreateNewTaskSubmit;
  isOpen: boolean;
  members: TeamMemberItem[];
};

export type CreateNewTaskSubmit<T = CreateNewTaskBody> = (
  body: T,
) => Promise<
  | undefined
  | {
      error: 'conflict' | 'unknown';
      conflictsCount?: number;
    }
>;

export type CreateNewTaskBody = {
  title: string;
  assignee: string;
  label: TaskLabel;
  priority: TaskPriority;
  startDate: DateTime;
  deadline: DateTime;
  deadlineTime: DateTime;
};
