import { DmsFolderType } from 'app/dms/Dms.types';

export type DmsSecondaryFolderProps = {
  id: string;
  name: string;
  isLoading: boolean;
  isError: boolean;
  foldersData?: DmsFolderType[];
  onAddFolder?: (folderName: string) => void;
};
