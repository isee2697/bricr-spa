import { DateTime } from 'luxon';

import { TeamMemberItem } from '../Tasks.types';

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
  label: string;
  startDate: DateTime;
  deadline: DateTime;
  priority: string;
};
