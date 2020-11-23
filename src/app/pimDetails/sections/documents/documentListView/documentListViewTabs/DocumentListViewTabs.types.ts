import { DocumentStatus } from '../../Documents.types';

export type DocumentListViewTabsProps = {
  status: DocumentStatus;
  onStatusChange: (status: DocumentStatus) => void;
};
