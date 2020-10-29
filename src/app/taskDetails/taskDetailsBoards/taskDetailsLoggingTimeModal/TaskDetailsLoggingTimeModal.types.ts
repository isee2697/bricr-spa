export type TaskLogSubmitBody = {
  timeSpent: string;
  dateStarted?: string;
  notes?: string;
};

export type TaskDetailsLoggingTimeModalProps = {
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
