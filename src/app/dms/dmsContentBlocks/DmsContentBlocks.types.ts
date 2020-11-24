import { PromiseFunction } from 'app/shared/types';

export type ActiveTabStatus = 'active' | 'inactive';

export interface DmsBlockItem {
  id: string;
  name: string;
  createdAt: string;
  status: ActiveTabStatus;
  file?: string;
}

export type DmsContentBlocksProps = {
  contentBlocks: DmsBlockItem[];
  onAdd: PromiseFunction<{ name: string }>;
  onUpdate: (block: DmsBlockItem) => void;
};
