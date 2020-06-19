import { IdentificationNumber } from 'api/types';

export type IdentificationNumberFormContainerProps = {
  items: IdentificationNumber[];
};

export type IdentificationNumberFormProps = IdentificationNumberFormContainerProps & {
  onAdd: VoidFunction;
  onSave(values: IdentificationNumber): Promise<undefined | { error: boolean }>;
};
