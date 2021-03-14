import { ListPimsFilters } from 'api/types';

export type GeneralListProps = {
  items: DocumentItem[];
  count: number;
  onAdd: VoidFunction;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
};

export type DocumentItem = {
  id: string;
  name: string;
  extension: string;
  documentType: DocumentType;
  isCreatedByBricr: boolean;
  dateCreated: string;
  dateUpdated: string;
};

export enum DocumentType {
  RentalAgreement = 'RentalAgreement',
  Otd = 'Otd',
}
