import { DocumentListViewType } from '../../Documents.types';
import { DocumentKind } from 'app/pimDetails/sections/documents/Documents.types';

export type DocumentTableViewProps = {
  data: DocumentListViewType[];
  onClick?: (documentKind: DocumentKind, id: string) => void;
  onPreview?: VoidFunction;
  onSend?: VoidFunction;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
};
