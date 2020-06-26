import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { DistanceUnit, Profile } from 'api/types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type LocationProps = PimDetailsSectionProps & {
  initialValues: LocationForm;
  typeOptions: RadioDataType[];
  onSave: (values: LocationForm) => Promise<undefined | { error: boolean }>;
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
};

export type LocationForm = {
  latitude?: string | null;
  longitude?: string | null;
  type?: string | null;
  notes?: string | null;
  goodToKnows?: {
    type?: string | null;
    distance?: string | null;
    units?: DistanceUnit | null;
    checked?: boolean | null;
  }[];
  description?: string;
};
