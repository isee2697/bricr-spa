import { PromiseFunction } from 'app/shared/types';

export type AddLvzPropertyGroupModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddLvzPropertyGroupBody>;
};

export type AddLvzPropertyGroupBody = {
  name: string;
};
