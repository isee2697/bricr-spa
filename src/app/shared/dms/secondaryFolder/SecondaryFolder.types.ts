import { CreateDmsFolderInput, DmsEntityType, DmsFile, DmsFolder } from 'api/types';

export type SecondaryFolderContainerProps = {
  id: string;
  name: string;
  entityType: DmsEntityType;
  type: string;
  hideExitButton?: boolean;
  onExit?: VoidFunction;
};

export type SecondaryFolderProps = SecondaryFolderContainerProps & {
  loading: boolean;
  onAddFolder?: (value: CreateDmsFolderInput) => void;
  folders: DmsFolder[];
  onSelectDmsFolder: (folder: DmsFolder) => void;
  files: DmsFile[];
  loadingFiles: boolean;
  onUpload: (dmsFolder: DmsFolder, files: File[]) => void;
};
