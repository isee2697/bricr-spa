import { CrmGeneral } from 'api/types';

export type IdentificationNumberProps = {
  data: CrmGeneral;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
