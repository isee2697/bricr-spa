import { Pim } from 'api/types';

export type MainProps = {
  pim: Pim;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
