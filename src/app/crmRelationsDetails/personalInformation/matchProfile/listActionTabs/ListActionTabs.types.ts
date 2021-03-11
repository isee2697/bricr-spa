import { MatchProfile } from 'api/types';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

export type ListActionTabsProps = {
  profileIndex?: string;
  onProfileIndexChange: (index: string) => void;
  profiles: MatchProfile[];
};

export type MatchListActionTab = ActionTab & {
  profile: MatchProfile;
};
