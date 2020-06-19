import { PimOutside } from 'api/types';

export type MainProps = {
  pimOutside: PimOutside;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type MainContainerProps = {
  pimOutside: PimOutside;
};
