import { IdentificationNumber, ProjectPhase } from 'api/types';

export type FormProps = {
  isInitEditing: boolean;
  isInitExpanded: boolean;
};

export type IdentificationNumbersForm = FormProps & {
  items: IdentificationNumber[];
};

export type PhaseForm = FormProps & {
  phase?: ProjectPhase | null;
};
