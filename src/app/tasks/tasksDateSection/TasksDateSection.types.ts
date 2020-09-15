import { DateRange } from 'api/types';

export type TasksDateSectionProps = {
  tab: number;
  handleSetDateRange: (range: DateRange) => void;
};
