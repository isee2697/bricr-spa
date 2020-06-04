import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type UspsProps = {
  options: RadioDataType[];
  onAdd: VoidFunction;
  onSave: () => Promise<undefined | { error: boolean }>;
  usps: Usp[];
};

type Usp = {
  name: string;
};
