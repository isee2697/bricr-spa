import { PromiseFunction } from 'app/shared/types';

export type AddSecurityDialogProps = {
  onSubmit: PromiseFunction<{ name: string }>;
};
