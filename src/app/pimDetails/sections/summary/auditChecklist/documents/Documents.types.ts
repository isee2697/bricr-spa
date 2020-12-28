import { DateTime } from 'luxon';

export type Document = {
  id: string;
  type: DocumentType;
  steps: DocumentRequestStep[];
  condition: DocumentCondition;
  document: DocumentFile;
};

export type DocumentFile = {
  name: string;
  url: string;
};

export enum DocumentType {
  AnnualStatementLastYear = 'AnnualStatementLastYear',
}

export enum DocumentRequestStatus {
  Request = 'Request',
  Uploaded = 'Uploaded',
  Accepted = 'Accepted',
}

export enum DocumentCondition {
  Mandatory = 'Mandatory',
  Optional = 'Optional',
  Extra = 'Extra',
}

export type DocumentRequestStep = {
  status: 'active' | 'rejected' | 'completed' | 'inactive';
  step: DocumentRequestStatus;
  date?: DateTime;
};
