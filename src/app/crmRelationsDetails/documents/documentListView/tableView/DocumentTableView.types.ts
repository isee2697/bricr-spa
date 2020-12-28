import { Document } from '../../Documents.types';

export type DocumentTableViewProps = {
  documents: Document[];
  onClick?: (id: string) => void;
  onPreview?: VoidFunction;
  onSend?: VoidFunction;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
};
