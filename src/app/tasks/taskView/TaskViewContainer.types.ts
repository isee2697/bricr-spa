import { TasksTab, TeamMemberItem } from '../Tasks.types';

export type TaskViewContainerProps = {
  tab: TasksTab;
  members: TeamMemberItem[];
  selectedMembers: TeamMemberItem[];
  onAddNewTask: VoidFunction;
};
