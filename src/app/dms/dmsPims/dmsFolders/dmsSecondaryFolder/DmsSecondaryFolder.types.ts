import { CreateDmsFolderInput, DmsEntityType } from 'api/types';
import { DmsFolderType } from 'app/dms/Dms.types';

export type DmsSecondaryFolderProps = {
  id: string;
  name: string;
  isLoading: boolean;
  isError: boolean;
  entityType: DmsEntityType;
  type: string;
  foldersData?: DmsFolderType[];
  onAddFolder?: (value: CreateDmsFolderInput) => void;
};
