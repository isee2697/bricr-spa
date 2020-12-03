import { DocumentKind } from '../../../Documents.types';

export type DocumentListOfCaseSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  title?: string;
  kind?: DocumentKind;
};
