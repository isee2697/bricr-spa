import { PromiseFunction } from 'app/shared/types';

export type AddLvzPropertyGroupItemModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddLvzPropertyGroupItemBody>;
};

export type AddLvzPropertyGroupItemBody = {
  name: string;
};
