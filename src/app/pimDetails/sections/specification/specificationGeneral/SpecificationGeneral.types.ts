import { Profile } from 'api/types';

export type SpecificationGeneralFormProps = {
  onAddPropertyClick: () => void;
};

export type SpecificationGeneralProps = {
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
};
