import { PromiseFunction } from 'app/shared/types';

export type AddLvzCardModalProps = {
  onSubmit: PromiseFunction<AddLvzCardBody>;
};

export type AddLvzCardBody = {
  name: string;
};
