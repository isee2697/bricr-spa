import { DateTime } from 'luxon';

import { CrmType, Maybe, Profile, CrmStatus, GenderType } from 'api/types';

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
  gender?: GenderType;
  email?: Maybe<string>;
  phoneNumber?: Maybe<string>;
  avatar?: Maybe<{ url?: Maybe<string> }>;
  status: Maybe<CrmStatus>;
  property: string;
  partner: Profile;
  manager: Profile;
  informationCompletedStatus: number;
  createdAt?: DateTime;
  meta: {
    matches: number;
    interests: number;
    viewings: number;
    biddings: number;
    candidate: number;
    optant: number;
  };
};
