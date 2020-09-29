import { TeamMemberItem } from '../Tasks.types';
import { TaskFullSummaryResult } from '../../../api/types';

export type TasksBodyContianerProps = {
  selectedMembers: TeamMemberItem[];
};

export type TasksBodyProps = {
  selectedMembers: TeamMemberItem[];
  tasksFullSummary: TaskFullSummaryResult;
};
