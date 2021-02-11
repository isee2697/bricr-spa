import { PromiseFunction } from 'app/shared/types';
import { QuestionOnlyForObjectType, QuestionType } from '../questionnaireItem/QuestionnaireItem.types';

export type AddQuestionnaireGroupItemModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddQuestionnaireGroupItemBody>;
};

export type AddQuestionnaireGroupItemBody = {
  questionType: QuestionType;
  isAnswerRequired: boolean;
  isSupplyExtraCommentField: boolean;
  isShowOnSummaryPage: boolean;
  question: string;
  multipleChoiceAnswers?: string[];
  questionsOnlyForObjectType: QuestionOnlyForObjectType;
};
