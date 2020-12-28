import { Document } from 'app/crmRelationsDetails/documents/Documents.types';

export type DocumentsListContainerProps = {
  documents: Document[];
  onClick?: (id: string) => void;
};

export type DocumentsListProps = {
  documents: Document[];
  onClick?: (id: string) => void;
};
