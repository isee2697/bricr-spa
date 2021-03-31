import { Dispatch, ReactNode, SetStateAction } from 'react';

import { DocumentFolderType } from '../../../../app/crmRelationsDetails/documents/Documents.types';
import { DmsFolder } from '../../../../api/types';

export type CardWithFolderProps = {
  isLoading: boolean;
  isError: boolean;
  foldersData?: DmsFolder[];
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DmsFolder) => void;
  onUploadFiles?: (folder: DmsFolder, files: File[]) => void;
  setSelectedFolder: Dispatch<SetStateAction<DmsFolder | null>>;
  selectedFolder?: DmsFolder | null;
  path: string;
  title?: ReactNode;
};
