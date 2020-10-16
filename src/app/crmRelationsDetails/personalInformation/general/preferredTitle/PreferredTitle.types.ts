import { CrmGeneral } from 'api/types';

export type PreferredTitleProps = {
  data: CrmGeneral;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
