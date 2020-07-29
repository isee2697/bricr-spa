import { IdentificationNumber } from 'api/types';

export type IdentificationNumberFormProps = {
  items: IdentificationNumber[];
  onAdd: () => Promise<{ id?: string }>;
  onSave(values: IdentificationNumber): Promise<undefined | { error: boolean }>;
};
