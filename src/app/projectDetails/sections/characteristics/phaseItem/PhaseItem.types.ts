import { ProjectPhase } from 'api/types';

export type PhaseItemProps = {
  inEditMode: boolean;
  phase: ProjectPhase;
  handleEdit: VoidFunction;
};
