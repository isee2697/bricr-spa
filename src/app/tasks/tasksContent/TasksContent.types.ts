import { DateRange, Task, TaskStatus, TaskSummaryByStatusResult } from 'api/types';
import { TasksTab, TeamMemberItem } from '../Tasks.types';
import { TasksViewMode } from '../Tasks.enum';

export type TasksContentProps = {
  tab: TasksTab;
  tasks: Task[];
  tasksSummaryByStatus: TaskSummaryByStatusResult;
  selectedMembers: TeamMemberItem[];
  searchKey: string;
  viewMode: TasksViewMode;
  dateRange: DateRange;
  onChangeSearchKey: (value: string) => void;
  onChangeViewMode: (value: TasksViewMode) => void;
  onChangeDateRange: (value: DateRange) => void;
  onUpdateTaskStatus: (taskId: string, status: TaskStatus) => void;
};
