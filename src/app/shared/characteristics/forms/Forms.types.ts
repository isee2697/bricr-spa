import { EntityWithFiles, EntityWithMultipleFiles, IdentificationNumber, ProjectPhase } from 'api/types';
import { EntityType } from 'app/shared/entityType';

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

export type EntityWithFilesMap = {
  [Key in EntityType]?: EntityWithFiles;
};

export type EntityWithMultipleFilesMap = {
  [Key in EntityType]?: EntityWithMultipleFiles;
};
