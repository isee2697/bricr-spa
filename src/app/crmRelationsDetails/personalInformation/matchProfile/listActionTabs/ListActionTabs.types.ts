import { MatchProfile } from '../MatchProfile.types';

export type ListActionTabsProps = {
  profileIndex?: string;
  onProfileIndexChange: (index: string) => void;
  profiles: MatchProfile[];
};
