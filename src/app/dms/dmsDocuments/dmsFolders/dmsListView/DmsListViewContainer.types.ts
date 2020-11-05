import { DmsDocument } from 'app/dms/Dms.types';

export type DmsListViewContainerProps = {
  id: string;
  name: string;
  isLoading?: boolean;
  isError?: boolean;
  data?: DmsDocument[];
};
