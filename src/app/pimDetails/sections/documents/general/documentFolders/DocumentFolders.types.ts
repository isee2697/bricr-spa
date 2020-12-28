import { DocumentFolderType } from '../General.types';

export type DocumentFoldersProps = {
  isLoading: boolean;
  isError: boolean;
  foldersData?: DocumentFolderType[];
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DocumentFolderType) => void;
};
