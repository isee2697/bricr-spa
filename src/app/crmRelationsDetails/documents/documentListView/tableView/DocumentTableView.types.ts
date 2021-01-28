import { ReactNode } from 'react';

import { Document } from '../../Documents.types';

export type DocumentTableHeaderCell = {
  field?: keyof Document;
  label?: string;
  renderer?: (rowData: Document) => ReactNode;
  sorter?: VoidFunction;
};

export type DocumentTableViewProps = {
  documents: Document[];
  onClick?: (id: string) => void;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
  selected: string[];
  onSelectDoc: (id: string) => void;
  onSelectAllDoc: VoidFunction;
};
