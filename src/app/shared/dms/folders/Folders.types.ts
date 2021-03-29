import { CreateDmsFolderInput, DmsEntityType } from 'api/types';

export type FoldersContainerProps = {
  entityItems: DmsEntityItem[];
  entityType: DmsEntityType;
  type: string;
  isLoading: boolean;
};

export type FoldersProps = FoldersContainerProps & {
  onAddFolder?: (value: CreateDmsFolderInput) => void;
};

export type DmsEntityItem = {
  id: string;
  name: string;
};
