import { CrmGeneral } from 'api/types';

export type PersonalInformationProps = {
  data: CrmGeneral;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
