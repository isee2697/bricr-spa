import { Checklist } from '../checklist/Checklist.types';
import { ChecklistListItem } from '../checklistList/ChecklistList.types';
import { DocumentsProps } from '../Documents.types';

export type ChecklistItemDetailsContainerProps = DocumentsProps & {};

export type ChecklistItemDetailsProps = DocumentsProps & {
  list: Checklist;
  item: ChecklistListItem;
};
