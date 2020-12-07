import { CrmContactInformation, Pim, Profile, Team } from 'api/types';

export type AdvancedSearchResult = {
  users: Profile[];
  emails: Profile[];
  crms: CrmContactInformation[];
  pims: Pim[];
  teams: Team[];
};

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
