import { PromiseFunction } from 'app/shared/types';

export type AddNewAccountModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddNewAccountBody>;
};

export type AddNewAccountBody = {
  email: string;
};
