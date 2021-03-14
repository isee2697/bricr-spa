import { DmsDocument } from 'app/dms/Dms.types';

export type DmsListViewContainerProps = {
  id: string;
  name: string;
  folderType: string;
  type: string;
  category: string;
  isLoading?: boolean;
  isError?: boolean;
  data?: DmsDocument[];
};
