import { DocumentUploadedType } from '../DocumentUploaded.types';

export type DocumentUploadedSidebarMenuProps = {
  title: string;
  onHide: () => void;
  isVisible: boolean;
  data: DocumentUploadedType;
};
