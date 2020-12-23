import { Document } from 'app/pimDetails/sections/summary/auditChecklist/documents/Documents.types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type DocumentsCheckListProps = PimDetailsSectionProps & {
  checkListItems: CheckList[];
  status: CheckListStatus;
  onStatusChange: (status: CheckListStatus) => void;
  onAddChecklist: VoidFunction;
};

export type CheckList = Document;

export enum CheckListStatus {
  CheckListBroker = 'CheckListBroker',
  CheckListOwner = 'CheckListOwner',
}
