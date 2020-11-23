import { ReactNode } from 'react';

import { PimOverallInfoQueryHookResult } from 'api/types';
import { DocumentKind } from '../../Documents.types';

export enum DocumentQuestionKind {
  YesNo = 'YesNo',
  YesNoWithNote = 'YesNoWithNote',
  MultiChoice = 'MultiChoice',
  MultiChoiceWithNote = 'MultiChoiceWithNote',
  NoteOnly = 'NoteOnly',
}

export enum YesNoType {
  Yes = 'Yes',
  No = 'No',
}

export type MultiChoiceType = {
  title: string;
  value: string;
  selected?: boolean;
};

export type QuestionYesNo = {
  question: string;
  result?: YesNoType;
  note?: string;
};

export type QuestionMultiChoice = {
  question: string;
  choices?: MultiChoiceType[];
  note?: string;
};

export type QuestionNoteOnly = {
  question: string;
  note?: string;
};

export enum QuestionStepStatus {
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed',
}

export type DocumentQuestionCardType = {
  id: string;
  title: string;
  subtitle?: string;
  type: DocumentQuestionKind;
  question: QuestionYesNo | QuestionMultiChoice | QuestionNoteOnly;
};

export type DocumentQuestionStepType = {
  id: string;
  title: string;
  questions?: DocumentQuestionCardType[];
  status: QuestionStepStatus;
  modifiedAt?: string;
  approved?: number;
  declined?: number;
};

export type DocumentQuestionnaireType = {
  id: string;
  name: string;
  documentKind: DocumentKind;
  steps: DocumentQuestionStepType[];
};

export type DocumentQuestionnaireProps = Pick<PimOverallInfoQueryHookResult, 'loading' | 'error'> & {
  pimId: string;
  data?: DocumentQuestionnaireType;
  breadcrumbs: ReactNode;
};
