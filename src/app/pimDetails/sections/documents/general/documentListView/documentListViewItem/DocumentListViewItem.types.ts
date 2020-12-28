import { DocumentKind, DocumentListViewType } from '../../General.types';

export type DocumentListViewItemProps = DocumentListViewType & {
  onClick?: (documentKind: DocumentKind, id: string) => void;
  onPrint?: VoidFunction;
  onToggleLock?: VoidFunction;
  onSend?: VoidFunction;
  onCopy?: VoidFunction;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
};
