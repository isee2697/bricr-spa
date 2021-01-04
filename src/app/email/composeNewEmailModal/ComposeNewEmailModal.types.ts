import { PromiseFunction } from 'app/shared/types';

export type ComposeNewEmailModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<ComposeNewEmailBody>;
};

export type ComposeNewEmailBody = {
  to: string;
};
