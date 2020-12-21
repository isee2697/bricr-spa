import { CrmIdentificationNumber } from 'api/types';

export type IdentificationNumberItem = CrmIdentificationNumber & {
  key: string;
};

export type IdentificationNumberProps = {
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
