import { DateTime } from 'luxon';

export type DocumentsContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type DocumentsProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

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

export type Document = {
  id: string;
  image: string;
  dateCreated: DateTime;
  name: string;
  stepsCompleted: DocumentRequestStep[];
};

export type DocumentRequestStep = {
  status: DocumentRequestStatus;
  date: DateTime;
};

export enum DocumentRequestStatus {
  Request,
  UserNotified,
  Uploaded,
  Accepted,
  RequestRejected,
}
