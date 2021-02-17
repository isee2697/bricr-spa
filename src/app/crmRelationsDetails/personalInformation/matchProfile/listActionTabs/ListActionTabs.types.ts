import { MatchProfile } from 'api/types';

export type ListActionTabsProps = {
  profileIndex?: string;
  onProfileIndexChange: (index: string) => void;
  profiles: MatchProfile[];
};
