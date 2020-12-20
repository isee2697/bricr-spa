import { AdvancedSearchResult } from 'api/types';

export type SearchProps = {
  results?: AdvancedSearchResult;
  onSearch: (keyword: string) => Promise<void>;
};

export type FormattedAdvancedSearchResult = {
  title: string;
  subline?: string;
  date?: Date;
  type: string;
};
