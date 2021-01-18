import { Document } from '../../Documents.types';

export type DocumentTableViewProps = {
  documents: Document[];
  onClick?: (id: string) => void;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
  selected: string[];
  onSelectDoc: (id: string) => void;
  onSelectAllDoc: VoidFunction;
};
