import { DateRange } from 'api/types';

export type TasksDateSectionFutureProps = {
  deadlines: DateRange[];
  onSelectDate: (deadlines: DateRange[]) => void;
};
