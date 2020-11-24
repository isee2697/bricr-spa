import { CrmGeneral } from 'api/types';

export type IdentificationProps = {
  data: CrmGeneral;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
