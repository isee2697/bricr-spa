import { TeamMemberItem } from '../Tasks.types';

export type TasksMemberListProps = {
  members: TeamMemberItem[];
};

export type User = {
  id: number;
  name: string;
};
