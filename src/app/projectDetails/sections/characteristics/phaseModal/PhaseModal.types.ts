export type PhaseForm = {
  phase: string;
};

export type PhaseModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: PhaseForm) => Promise<undefined | { error: boolean }>;
  phaseList: Phase[];
  onAdd: () => void;
  selectedPhase?: string;
};

export type Phase = {
  id: string;
  name: string;
};

export type PhaseModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  selectedPhase?: string;
};
