import { EmailListItem, ListPimsFilters } from 'api/types';

export type Email = Omit<EmailListItem, '__typename'> & {
  body?: string;
  pinned?: boolean;
  links?: number;
  image?: string;
};

export type EmailListProps = {
  items: Email[];
  count: number;
  onAdd: VoidFunction;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
};
