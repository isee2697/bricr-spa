import { DocumentKind } from '../../../general/General.types';

export type DocumentListOfCaseSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  title?: string;
  kind?: DocumentKind;
};
