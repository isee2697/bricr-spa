import { TeamMemberItem } from '../Tasks.types';
import { TaskFullSummaryResult } from '../../../api/types';

export type TasksBodyContianerProps = {
  members: TeamMemberItem[];
  selectedMembers: TeamMemberItem[];
};

export type TasksBodyProps = {
  members: TeamMemberItem[];
  selectedMembers: TeamMemberItem[];
  tasksFullSummary: TaskFullSummaryResult;
};
