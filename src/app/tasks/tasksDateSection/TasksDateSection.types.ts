import { DateRange } from 'api/types';
import { TasksTab } from '../Tasks.types';

export type TasksDateSectionProps = {
  tab: TasksTab;
  deadlines: DateRange[];
  handleSetDateRange: (deadlines: DateRange[]) => void;
};
