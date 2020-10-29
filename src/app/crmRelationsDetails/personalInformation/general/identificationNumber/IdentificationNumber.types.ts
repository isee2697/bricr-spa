import { CrmGeneral, CrmIdentificationNumber } from 'api/types';

export type IdentificationNumberItem = CrmIdentificationNumber & {
  key: string;
};

export type IdentificationNumberProps = {
  data: CrmGeneral;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
