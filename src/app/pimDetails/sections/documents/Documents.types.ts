import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { StatCardVariant } from 'ui/molecules/statCard/StatCard.types';

export enum DocumentStatus {
  ActionRequired = 'ActionRequired',
  Drafts = 'Drafts',
  Pending = 'Pending',
  Rejected = 'Rejected',
  Signed = 'Signed',
  Archive = 'Archive',
  Uploaded = 'Uploaded',
}

export enum DocumentKind {
  Questionnaire = 'questionnaire',
  ListOfCase = 'list-of-case',
  Contract = 'contract',
  Custom = 'custom',
}

export type DocumentListViewType = {
  id: string;
  name?: string;
  avatar?: string;
  size?: number;
  type?: string;
  versionNumber: number | string;
  dateCreated: Date | string;
  sellers: string[];
  documentKind: DocumentKind;
  contractAddress: string;
  price: string;
  buyer: string;
  completeness?: number;
  status?: DocumentStatus;
};

export type DocumentFolderType = {
  id: string;
  name: string;
  documents?: DocumentListViewType[];
  kind?: DocumentKind;
};

export type DocumentMeta = {
  title: string;
  value: number;
  type: StatCardVariant;
  percent: number;
};

export type DocumentsFormProps = {
  documents: DocumentFolderType[];
  metaInfo: DocumentMeta[];
  onAdd: (name: string) => void;
  onUpdate: (document: DocumentFolderType) => void;
  onRemove: (id: string) => void;
};

export type DocumentsProps = PimDetailsSectionProps & DocumentsFormProps;
