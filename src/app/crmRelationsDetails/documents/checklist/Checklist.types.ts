import { DateTime } from 'luxon';

import { DocumentsProps } from '../Documents.types';

export type ChecklistContainerProps = DocumentsProps & {
  path: string;
};

export type ChecklistProps = DocumentsProps & {
  path: string;
  status: ChecklistStatus;
  onStatusChange: (status: ChecklistStatus) => void;
  lists: Checklist[];
};

export type Checklist = {
  id: string;
  image: string;
  type: ChecklistType;
  status: ChecklistStatus;
  title: string;
  modifiedAt: DateTime;
  accepted: number;
  checked: number;
  steps: ChecklistStep[];
};

export type ChecklistStep = {
  step: CheclistStepType;
  status: ChecklistStepStatus;
  date: DateTime;
  uploadedCount?: number;
  uploadedTotalCount?: number;
};

export enum ChecklistStatus {
  ActionRequired = 'ActionRequired',
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum CheclistStepType {
  Invited = 'Invited',
  Started = 'Started',
  Uploaded = 'Uploaded',
  Completed = 'Completed',
}

export enum ChecklistStepStatus {
  Completed = 'Completed',
  Rejected = 'Rejected',
  Pending = 'Pending',
  InProgress = 'InProgress',
}

export enum ChecklistType {
  PropertyForSales = 'PropertyForSale',
  Interest = 'Interest',
}

export enum ChecklistInterestType {
  House = 'House',
  Apartment = 'Apartment',
  Bog = 'Bog',
  Aog = 'Aog',
  ParkingLot = 'ParkingLot',
  BuildingPlot = 'BuildingPlot',
  Other = 'Other',
}
