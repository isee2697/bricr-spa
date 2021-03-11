import { DocumentFolderType, DocumentsProps } from '../../../../app/crmRelationsDetails/documents/Documents.types';

export type DocumentFoldersProps = DocumentsProps & {
  isLoading: boolean;
  isError: boolean;
  foldersData?: DocumentFolderType[];
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DocumentFolderType) => void;
  onUploadFiles?: (folder: DocumentFolderType, files: File[]) => void;
  path: string;
};
