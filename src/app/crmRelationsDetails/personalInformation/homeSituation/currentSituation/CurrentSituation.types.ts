import { CrmHomeSituation } from 'api/types';

export type CurrentSituationProps = {
  data: CrmHomeSituation;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
