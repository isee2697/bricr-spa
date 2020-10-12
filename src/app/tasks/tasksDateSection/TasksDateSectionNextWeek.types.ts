import { DateRange } from 'api/types';

export type TasksDateSectionNextWeekProps = {
  deadlines: DateRange[];
  onSelectDate: (deadlines: DateRange[]) => void;
};
