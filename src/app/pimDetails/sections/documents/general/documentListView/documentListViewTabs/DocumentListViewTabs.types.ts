import { DocumentStatus } from '../../General.types';

export type DocumentListViewTabsProps = {
  status: DocumentStatus;
  onStatusChange: (status: DocumentStatus) => void;
};
