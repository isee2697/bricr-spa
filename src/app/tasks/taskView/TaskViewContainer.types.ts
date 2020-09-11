import { DateRange } from "api/types";

import { TeamMemberItem } from "../Tasks.types";
import { TasksViewMode } from "../Tasks.enum";

export type TaskViewContainerProps = {
  viewMode: TasksViewMode;
  search: string;
  selectedMembers: TeamMemberItem[];
  dateRange: DateRange;
};
