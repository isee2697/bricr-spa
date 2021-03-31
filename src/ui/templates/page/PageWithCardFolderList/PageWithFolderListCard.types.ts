import { DocumentsProps } from '../../../../app/crmRelationsDetails/documents/Documents.types';
import { DmsFolder } from '../../../../api/types';

export type PageWithFolderListCardProps = DocumentsProps & {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  title: string;
  folders?: DmsFolder[];
  onAddFolder?: (folderName: string) => void;
  onDeleteFolder?: (id: string) => void;
  onUpdateFolder?: (folder: DmsFolder) => void;
  onUploadFiles?: (folder: DmsFolder, files: File[]) => void;
};
