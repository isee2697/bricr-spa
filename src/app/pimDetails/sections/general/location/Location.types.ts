import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { DistanceUnit, PimLocation } from 'api/types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type LocationProps = PimDetailsSectionProps & {
  initialValues: PimLocation;
  typeOptions: RadioDataType[];
  onSave: (values: LocationForm) => Promise<undefined | { error: boolean }>;
};

export type LocationForm = {
  latitude?: string;
  longitude?: string;
  type?: string;
  notes?: string;
  goodToKnows?: {
    type?: string;
    distance?: string;
    units?: DistanceUnit;
    checked?: boolean;
  }[];
};
