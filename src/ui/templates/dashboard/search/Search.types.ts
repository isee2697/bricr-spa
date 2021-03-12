import { ReactNode } from 'react';

import { SearchResult } from 'api/types';

export type SearchProps = {
  results?: SearchResult;
  onSearch: (keyword: string) => Promise<void>;
  loading: boolean;
};

export type FormattedAdvancedSearchResult = {
  title: string;
  subline?: string;
  date?: Date;
  type: string;
  icon?: ReactNode;
};
