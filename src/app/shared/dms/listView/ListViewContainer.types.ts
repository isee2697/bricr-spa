import { DmsEntityType } from 'api/types';
import { DmsDocument } from 'app/dms/Dms.types';

export type ListViewContainerProps = {
  id: string;
  name: string;
  folderType: string;
  type: string;
  entityType: DmsEntityType;
  isLoading?: boolean;
  isError?: boolean;
  data?: DmsDocument[];
};

export type DocumentItem = {
  id: string;
  name: string;
  extension: string;
  documentType: DocumentType;
  isCreatedByBricr: boolean;
  dateCreated: string;
  dateUpdated: string;
};
