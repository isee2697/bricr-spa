import { Task } from 'api/types';

export type TaskLogSubmitBody = {
  timeSpent: string;
  dateStarted?: string;
  notes?: string;
};

export type TaskDetailsLoggingTimeModalProps = {
  task: Task;
  isOpen: boolean;
  onLogTime: (
    log: TaskLogSubmitBody,
  ) => Promise<
    | undefined
    | {
        error: boolean;
      }
  >;
  onClose: VoidFunction;
};
