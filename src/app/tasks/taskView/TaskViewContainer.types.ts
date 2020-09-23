import { TasksTab, TeamMemberItem } from '../Tasks.types';

export type TaskViewContainerProps = {
  tab: TasksTab;
  selectedMembers: TeamMemberItem[];
};
