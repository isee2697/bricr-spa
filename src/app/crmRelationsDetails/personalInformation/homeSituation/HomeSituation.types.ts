import { CrmHomeSituation } from 'api/types';

export type HomeSituationProps = {
  data: CrmHomeSituation;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
