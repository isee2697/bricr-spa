import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { Maybe, UpdateUspInput, Usp } from 'api/types';

export type UspsProps = {
  options: RadioDataType[];
  onAdd: () => Promise<undefined | { error: boolean }>;
  onSave: (values: UpdateUspInput) => Promise<undefined | { error: boolean }>;
  usps: Usp[];
  newUspId: string | null;
};

export type UspsContainerProps = {
  usps?: Maybe<Usp[]>;
};
