import { AnyObject } from 'final-form';

import { TeamMemberItem } from '../Tasks.types';

export type CreateNewTaskModalProps = {
  onSubmit: CreateNewTaskSubmit;
  isOpen: boolean;
  members: TeamMemberItem[];
};

export type CreateNewTaskSubmit<T = AnyObject> = (
  body: T,
) => Promise<
  | undefined
  | {
      error: 'conflict' | 'unknown';
      conflictsCount?: number;
    }
>;
