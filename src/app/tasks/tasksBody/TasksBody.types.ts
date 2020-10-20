import { TeamMemberItem } from '../Tasks.types';
import { TaskFullSummaryResult } from '../../../api/types';

export type TasksBodyContainerProps = {
  members: TeamMemberItem[];
  selectedMembers: TeamMemberItem[];
};

export type TasksBodyProps = {
  loading: boolean;
  members: TeamMemberItem[];
  selectedMembers: TeamMemberItem[];
  tasksFullSummary: TaskFullSummaryResult | undefined | null;
  onAddNewTask: VoidFunction;
};
