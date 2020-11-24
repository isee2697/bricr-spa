import { DocumentsCount } from '../Documents.types';

export type ListActionTabsProps = {
  tabIndex: number;
  onTabChange: (tab: number) => void;
  countInfo: DocumentsCount;
};
