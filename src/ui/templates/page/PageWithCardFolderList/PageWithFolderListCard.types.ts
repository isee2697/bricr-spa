import { DocumentFolderType, DocumentsProps } from '../../../../app/crmRelationsDetails/documents/Documents.types';

export type PageWithFolderListCardProps = DocumentsProps & {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  title: string;
  folders?: DocumentFolderType[];
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DocumentFolderType) => void;
  onUploadFiles?: (folder: DocumentFolderType, files: File[]) => void;
};
