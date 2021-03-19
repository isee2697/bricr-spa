import { Dispatch, ReactNode, SetStateAction } from 'react';

import { DocumentFolderType } from '../../../../app/crmRelationsDetails/documents/Documents.types';

export type CardWithFolderProps = {
  isLoading: boolean;
  isError: boolean;
  foldersData?: DocumentFolderType[];
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DocumentFolderType) => void;
  onUploadFiles?: (folder: DocumentFolderType, files: File[]) => void;
  setSelectedFolder: Dispatch<SetStateAction<DocumentFolderType | null>>;
  path: string;
  title?: ReactNode;
};
