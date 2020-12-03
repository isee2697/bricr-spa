import { DocumentListViewType } from '../../Documents.types';
import { DocumentKind } from 'app/pimDetails/sections/documents/Documents.types';

export type DocumentListViewItemProps = DocumentListViewType & {
  onClick?: (documentKind: DocumentKind, id: string) => void;
  onPrint?: VoidFunction;
  onToggleLock?: VoidFunction;
  onSend?: VoidFunction;
  onCopy?: VoidFunction;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
};
