import { PromiseFunction } from 'app/shared/types';

export type DmsAddBlockDialogProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<{ name: string }>;
  isSubmitting?: boolean;
  name?: string;
};
