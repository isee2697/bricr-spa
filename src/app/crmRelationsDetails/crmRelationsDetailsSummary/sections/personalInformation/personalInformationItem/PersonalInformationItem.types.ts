import { CrmAddress, GenderType, Maybe } from 'api/types';

export type PersonalInformationItemProps = {
  firstName?: Maybe<string>;
  initials?: Maybe<string>;
  lastName?: Maybe<string>;
  gender?: Maybe<GenderType>;
  dateOfBirth?: Maybe<string>;
  placeOfBirth?: Maybe<string>;
  addresses?: Maybe<Partial<CrmAddress>[]>;
  email?: Maybe<string>;
  phoneNumber?: Maybe<string>;
  avatar?: Maybe<{ url?: Maybe<string> }>;
};
