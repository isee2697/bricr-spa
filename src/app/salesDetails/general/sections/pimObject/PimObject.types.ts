import { Pim } from 'api/types';

export type PimObjectProps = {
  pims: Pim[];
  onLinkPims: (pimIds: string[]) => Promise<void>;
};
