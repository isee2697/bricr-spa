import { CrmType, Maybe, Profile } from 'api/types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

export type CrmProps = {
  crms: CrmItem[];
  type: CrmType;
  status: ActionTabStatus;
  onTypeChange: (type: CrmType) => void;
  onStatusChange: (status: ActionTabStatus) => void;
};

export type CrmItem = {
  id: string;
  type: CrmType;
  firstName?: Maybe<string>;
  insertion?: Maybe<string>;
  lastName?: Maybe<string>;
  email?: Maybe<string>;
  phoneNumber?: Maybe<string>;
  avatar?: Maybe<{ url?: Maybe<string> }>;
  status: ActionTabStatus;
  property: string;
  partner: Profile;
  manager: Profile;
  informationCompletedStatus: number;
  meta: {
    matches: number;
    interests: number;
    viewings: number;
    biddings: number;
    candidate: number;
    optant: number;
  };
};
