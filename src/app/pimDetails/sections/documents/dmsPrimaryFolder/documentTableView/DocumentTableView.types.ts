import { DocumentListViewType } from '../../Documents.types';

export type DocumentTableViewProps = {
  data: DocumentListViewType[];
  onPreview?: VoidFunction;
  onSend?: VoidFunction;
  onArchive?: VoidFunction;
  onDelete?: VoidFunction;
};
