import { DateTime } from 'luxon';

import { CrmType, Maybe, Profile, CrmStatus, GenderType, CrmAddress, LinkedCrm } from 'api/types';

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
  gender?: Maybe<GenderType>;
  dateOfBirth?: Maybe<string>;
  placeOfBirth?: Maybe<string>;
  nationality?: Maybe<string>;
  addresses?: Maybe<Partial<CrmAddress>[]>;
  martialStatus?: Maybe<string>;
  familyCompositionChildren?: Maybe<number>;
  familyCompositionAdults?: Maybe<number>;
  currentHomeSituation?: Maybe<string>;
  email?: Maybe<string>;
  phoneNumber?: Maybe<string>;
  avatar?: Maybe<{ url?: Maybe<string> }>;
  status: Maybe<CrmStatus>;
  property: string;
  partner: Maybe<LinkedCrm>;
  manager: Profile;
  createdAt?: DateTime;
  completeness?: number;
  meta: {
    matches: number;
    interests: number;
    viewings: number;
    biddings: number;
    candidate: number;
    optant: number;
  };
};
