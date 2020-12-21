import { DateTime } from 'luxon';

export type Document = {
  id: string;
  type: DocumentType;
  steps: DocumentRequestStep[];
};

export enum DocumentType {
  AnnualStatementLastYear = 'AnnualStatementLastYear',
}

export enum DocumentRequestStatus {
  Request = 'Request',
  Uploaded = 'Uploaded',
  Accepted = 'Accepted',
}

export type DocumentRequestStep = {
  status: 'active' | 'rejected' | 'completed' | 'inactive';
  step: DocumentRequestStatus;
  date?: DateTime;
};
