import { ProjectPhase } from 'api/types';

export type PhaseForm = {
  phase?: ProjectPhase;
};

export type PhaseModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: PhaseForm) => Promise<undefined | { error: boolean }>;
  phaseList: ProjectPhase[];
  onAdd: () => void;
  selectedPhase?: ProjectPhase;
};

export type PhaseModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  selectedPhase?: ProjectPhase;
};
