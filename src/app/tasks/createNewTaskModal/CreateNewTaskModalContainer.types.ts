import { TeamMemberItem } from '../Tasks.types';

export type CreateNewTaskModalContainerProps = {
  members: TeamMemberItem[];
  onAddNewTask: VoidFunction;
};
