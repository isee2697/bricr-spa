import { PromiseFunction } from 'app/shared/types';

export type AddArticleGroupModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddArticleGroupBody>;
};

export type AddArticleGroupBody = {
  name: string;
};
