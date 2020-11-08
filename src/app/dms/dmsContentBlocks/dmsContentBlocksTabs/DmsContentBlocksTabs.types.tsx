import { ActiveTabStatus } from '../DmsContentBlocks.types';

export type DmsContentBlocksTabsProps = {
  status: ActiveTabStatus;
  onStatusChange: (status: ActiveTabStatus) => void;
  amounts?: {
    active: number;
    inactive: number;
  };
};
