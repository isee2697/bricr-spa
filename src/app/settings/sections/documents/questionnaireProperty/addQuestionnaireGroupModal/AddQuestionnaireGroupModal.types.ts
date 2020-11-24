import { PromiseFunction } from 'app/shared/types';

export type AddQuestionnaireGroupModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddQuestionnaireGroupBody>;
};

export type AddQuestionnaireGroupBody = {
  name: string;
};
