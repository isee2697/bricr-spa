import { DocumentKind, DocumentListViewType } from '../../General.types';

export type DocumentTableViewProps = {
  data: DocumentListViewType[];
  onClick?: (documentKind: DocumentKind, id: string) => void;
  onPreview?: VoidFunction;
  onSend?: VoidFunction;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
};
