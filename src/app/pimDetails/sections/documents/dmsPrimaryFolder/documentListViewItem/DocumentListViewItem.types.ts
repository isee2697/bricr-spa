import { DocumentListViewType } from '../../Documents.types';

export type DocumentListViewItemProps = DocumentListViewType & {
  onPrint?: VoidFunction;
  onToggleLock?: VoidFunction;
  onSend?: VoidFunction;
  onCopy?: VoidFunction;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
};
