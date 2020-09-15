import { TeamMemberItem } from '../Tasks.types';

export type TasksMemberListProps = {
  members: TeamMemberItem[];
  selectedMembers: TeamMemberItem[];
  onSelect: (members: TeamMemberItem[]) => void;
};

export type User = {
  id: number;
  name: string;
};
