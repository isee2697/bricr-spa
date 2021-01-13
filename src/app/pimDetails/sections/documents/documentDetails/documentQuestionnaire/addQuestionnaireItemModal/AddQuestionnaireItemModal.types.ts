import {
  QuestionOnlyForObjectType,
  QuestionType,
} from 'app/settings/sections/documents/questionnaireProperty/questionnaireItem/QuestionnaireItem.types';
import { PromiseFunction } from 'app/shared/types';

export type AddQuestionnaireItemModalProps = {
  onSubmit: PromiseFunction<AddQuestionnaireItemBody>;
};

export type AddQuestionnaireItemBody = {
  questionType: QuestionType;
  isAnswerRequired: boolean;
  isSupplyExtraCommentField: boolean;
  isShowOnSummaryPage: boolean;
  question: string;
  multipleChoiceAnswers?: string[];
  questionsOnlyForObjectType: QuestionOnlyForObjectType;
};
