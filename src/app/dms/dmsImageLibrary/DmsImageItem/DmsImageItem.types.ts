import { PromiseFunction } from 'app/shared/types';
import { DmsImageItem } from '../DmsImages.types';

export type DmsImageItemProps = {
  image: DmsImageItem;
  onEdit: PromiseFunction<DmsImageItem>;
  onDelete: VoidFunction;
};
