import { DmsDocument } from 'app/dms/Dms.types';

export type DmsListViewContainerProps = {
  id: string;
  name: string;
  folderType: string;
  type: string;
  category: string;
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
