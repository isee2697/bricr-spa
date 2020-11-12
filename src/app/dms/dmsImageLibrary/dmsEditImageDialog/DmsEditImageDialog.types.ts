import { PromiseFunction } from 'app/shared/types';
import { DmsImageItem } from '../DmsImages.types';

export type DmsEditImageDialogProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<{ tags: string[] }>;
  isSubmitting?: boolean;
  image: DmsImageItem;
};
