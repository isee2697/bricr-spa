import { CrmType, Maybe, Profile, CrmStatus } from 'api/types';

export type CrmProps = {
  path: string;
  status: CrmStatus;
  onStatusChange: (status: CrmStatus) => void;
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
  status: CrmStatus;
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
