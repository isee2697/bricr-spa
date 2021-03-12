import { PromiseFunction } from 'app/shared/types';

export type DmsAddTemplateDialogProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<{ name: string }>;
  isSubmitting?: boolean;
  name?: string;
};
