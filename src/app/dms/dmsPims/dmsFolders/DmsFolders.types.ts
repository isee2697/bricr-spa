import { CreateDmsFolderInput, DmsEntityType } from 'api/types';
import { DmsFolderType } from 'app/dms/Dms.types';

export type DmsFoldersContainerProps = {
  entityType: DmsEntityType;
  type: string;
  data: DmsFolderType;
};

export type DmsFoldersProps = DmsFoldersContainerProps & {
  onAddFolder?: (value: CreateDmsFolderInput) => void;
};
