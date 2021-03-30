import { CreateDmsFolderInput, DmsEntityType, DmsFolder } from 'api/types';

export type SecondaryFolderContainerProps = {
  id: string;
  name: string;
  entityType: DmsEntityType;
  type: string;
};

export type SecondaryFolderProps = SecondaryFolderContainerProps & {
  loading: boolean;
  onAddFolder?: (value: CreateDmsFolderInput) => void;
  folders: DmsFolder[];
};