export type FormProps = {
  name: string;
  file?: File;
  forceAdd: boolean;
};

export type NewPhaseModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  conflictNumber: number;
  onSubmit: (values: FormProps) => Promise<undefined | { error: boolean }>;
  resetConflictNumber: VoidFunction;
};

export type NewPhaseModalContainerProps = {
  isOpened: boolean;
  onClose: (id?: string) => void;
};
