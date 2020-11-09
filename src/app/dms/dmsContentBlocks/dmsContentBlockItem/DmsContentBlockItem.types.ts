import { ActiveTabStatus, DmsBlockItem } from '../DmsContentBlocks.types';

export type DmsContentBlockItemProps = {
  contentBlock: DmsBlockItem;
  onStatusChange: (status: ActiveTabStatus) => void;
};
