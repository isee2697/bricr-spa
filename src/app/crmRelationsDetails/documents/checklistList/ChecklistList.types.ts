import { DateTime } from 'luxon';

import { PromiseFunction } from 'app/shared/types';
import { ChecklistType } from '../checklist/Checklist.types';
import { DocumentsProps } from '../Documents.types';

export type ChecklistListContainerProps = DocumentsProps & {};

export type ChecklistListProps = DocumentsProps & {
  list: ChecklistList;
  onAddNewChecklistItem: PromiseFunction<AddNewChedklistItemBody>;
};

export type ChecklistList = {
  id: string;
  title: string;
  type: ChecklistType;
  items: ChecklistListItem[];
};

export type ChecklistListItem = {
  id: string;
  type: DocumentType;
  isUploaded: boolean;
  uploadedAt?: DateTime;
  isAccepted: boolean;
  acceptedAt?: DateTime;
  condition: DocumentCondition;
  image?: string;
};

export type AddNewChedklistItemBody = {
  type: DocumentType;
};

export enum DocumentCondition {
  Mandatory = 'Mandatory',
  Optional = 'Optional',
  Extra = 'Extra',
}

export enum DocumentType {
  AnnualStatementLastYear = 'AnnualStatementLastYear',
  SalarySlip = 'SalarySlip',
  DriversLicence = 'DriversLicence',
  PersonalId = 'PersonalId',
  BankStatement = 'BankStatement',
}
