import { LastUpdatedProfile } from 'api/types';

export type SpecificationGeneralFormProps = {
  onAddPropertyClick: () => void;
};

export type SpecificationGeneralProps = {
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
};
