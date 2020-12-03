import { DocumentKind } from '../../../Documents.types';
import {
  DocumentQuestionStepType,
  QuestionMultiChoice,
  QuestionNoteOnly,
  QuestionYesNo,
} from '../DocumentQuestionnaire.types';

export type DocumentQuestionnaireFlowProps = {
  stepInfo: DocumentQuestionStepType;
  stepIndex: number;
  documentKind: DocumentKind;
};

export type QuestionFormProps = {
  initOpened?: boolean;
  title?: string;
  subtitle?: string;
  documentKind?: DocumentKind;
};

export type QuestionYesNoFormProps = QuestionFormProps & {
  question: QuestionYesNo;
  isNote?: boolean;
};

export type QuestionMultiChoiceFormProps = QuestionFormProps & {
  question: QuestionMultiChoice;
  isNote?: boolean;
};

export type QuestionNoteOnlyFormProps = QuestionFormProps & {
  question: QuestionNoteOnly;
};
