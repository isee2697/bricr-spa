import { Profile, Task } from 'api/types';

export type TasksProps = {
  user: Profile;
  members: TeamMemberItem[];
};

export type TaskItem = Task & {
  assigneeDetail?: TeamMemberItem;
};

export type TeamMemberItem = Pick<Profile, 'id' | 'firstName' | 'lastName'>;

export enum TasksTab {
  Today = 'today',
  NextWeek = 'nextWeek',
  Future = 'future',
  Overdue = 'overdue',
}
