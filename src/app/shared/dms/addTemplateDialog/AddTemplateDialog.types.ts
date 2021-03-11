import { PromiseFunction } from 'app/shared/types';

export type AddTemplateDialogProps = {
  onSubmit: PromiseFunction<{ name: string }>;
};
