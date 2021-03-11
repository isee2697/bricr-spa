import { DocumentFolderType, DocumentsProps } from '../Documents.types';

export type DocumentFoldersProps = DocumentsProps & {
  isLoading: boolean;
  isError: boolean;
  foldersData?: DocumentFolderType[];
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DocumentFolderType) => void;
  onUploadFiles?: (folder: DocumentFolderType, files: File[]) => void;
};
