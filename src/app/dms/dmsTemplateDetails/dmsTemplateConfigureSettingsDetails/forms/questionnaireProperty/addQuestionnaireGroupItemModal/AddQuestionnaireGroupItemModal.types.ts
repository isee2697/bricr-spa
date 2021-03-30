import { OptionsInput, QuestionType } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type AddQuestionnaireGroupItemModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddQuestionnaireGroupItemBody>;
};

export type AddQuestionnaireGroupItemBody = {
  name: string;
  type: QuestionType;
  required: boolean;
  commentEnabled: boolean;
  showOn: boolean;
  options: OptionsInput[];
};
