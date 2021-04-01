import { Groups, Question, QuestionInput, UpdateQuestionInput } from 'api/types';
import { PromiseFunction, PromiseResponse } from 'app/shared/types';

export type QuestionnaireItemContainerProps = {
  group: Groups;
};

export type QuestionnaireItemProps = QuestionnaireItemContainerProps & {
  items: Question[];
  isLoading: boolean;
  onAddQuestion: PromiseFunction<QuestionInput>;
  onUpdateQuestoin: (questionId: string, values: UpdateQuestionInput) => PromiseResponse;
};

export type QuestionnaireGroupItem = {
  id: string;
  questionType: QuestionType;
  isAnswerRequired: boolean;
  isSupplyExtraCommentField: boolean;
  isShowOnSummaryPage: boolean;
  question: string;
  multipleChoiceAnswers?: string[];
  questionsOnlyForObjectType: QuestionOnlyForObjectType;
};

export enum QuestionType {
  YesNo = 'YesNo',
  MultipleChoice = 'MultipleChoice',
  FreeText = 'FreeText',
}

export enum QuestionOnlyForObjectType {
  Appointment = 'Appointment',
  ResidentialSale = 'ResidentialSale',
  ResidentialRent = 'ResidentialRent',
  ParkingLot = 'ParkingLot',
}
