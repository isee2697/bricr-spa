import { ReactNode } from 'react';

import { Entities, SearchResult } from 'api/types';

export type SearchProps = {
  results?: SearchResult;
  onSearch: (keyword: string) => Promise<void>;
  loading: boolean;
  onClick?: (type: Entities, id: string) => void;
};

export type FormattedAdvancedSearchResult = {
  title: string;
  subline?: string;
  date?: Date;
  type: string;
  icon?: ReactNode;
};
