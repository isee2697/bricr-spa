import { CrmGeneral } from 'api/types';

export type PersonalInformationGeneralProps = {
  data: CrmGeneral;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
