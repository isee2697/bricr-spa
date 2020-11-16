import { PromiseFunction } from 'app/shared/types';

export type ActiveTabStatus = 'active' | 'inactive';

export interface DmsImageItem {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  createdAt: string;
  status: ActiveTabStatus;
  tags: string[];
}

export type DmsImagesProps = {
  images: DmsImageItem[];
  onAdd: PromiseFunction<{ name: string }>;
  onUpdate: PromiseFunction<DmsImageItem>;
};
