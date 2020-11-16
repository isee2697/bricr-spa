import { QuestionnaireGroup } from '../Questionnaire.types';

export type QuestionnaireItemProps = {
  group: QuestionnaireGroup;
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
