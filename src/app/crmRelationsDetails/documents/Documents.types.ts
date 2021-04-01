import { DateTime } from 'luxon';

export type DocumentsContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  title: string;
};

export type DocumentsProps = DocumentsContainerProps;

export enum DocumentStatus {
  Requested = 'Requested',
  Checklist = 'Checklist',
  Uploaded = 'Uploaded',
  Accepted = 'Accepted',
}

export type DocumentsCount = {
  [DocumentStatus.Requested]: number;
  [DocumentStatus.Checklist]: number;
  [DocumentStatus.Uploaded]: number;
  [DocumentStatus.Accepted]: number;
};

export type DocumentFolderType = {
  id: string;
  name: string;
  documents?: Document[];
  isEmailFolder?: boolean;
  isUserFolder?: boolean;
  order?: number | null;
};

export type Document = {
  id: string;
  uri: string;
  dateCreated: DateTime;
  name: string;
  stepsCompleted: DocumentRequestStep[];
  size?: number;
  type?: string;
};

export type DocumentRequestStep = {
  status: DocumentRequestStatus;
  date: DateTime;
};

export enum DocumentRequestStatus {
  Request = 'Request',
  UserNotified = 'UserNotified',
  Uploaded = 'Uploaded',
  Accepted = 'Accepted',
  RequestRejected = 'RequestRejected',
}
