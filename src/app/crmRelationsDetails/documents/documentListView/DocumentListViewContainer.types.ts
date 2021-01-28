import { Document, DocumentFolderType } from 'app/crmRelationsDetails/documents/Documents.types';

export type DocumentListViewContainerProps = {
  path: string;
  folder: DocumentFolderType;
  documents?: Document[];
  onUploadFiles: (files: File[]) => void;
};
