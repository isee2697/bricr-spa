import { DocumentFolderType } from '../General.types';

export type DocumentFoldersProps = {
  isLoading: boolean;
  isError: boolean;
  foldersData?: DocumentFolderType[];
  selectedFolder: DocumentFolderType | null;
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DocumentFolderType) => void;
  onSelectFolder: (folder: DocumentFolderType | null) => void;
};
