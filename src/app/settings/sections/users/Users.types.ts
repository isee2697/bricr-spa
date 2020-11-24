import { EmailAddressType, GetUsersCountQuery, Profile, PhoneNumberType, SocialMediaLinkType } from 'api/types';
import { DataHandlerProps, PromiseFunction } from 'app/shared/types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type UserProps = {
  data: Profile[];
  total?: GetUsersCountQuery;
  onActivationChange: PromiseFunction<Profile>;
  onUpdate: PromiseFunction<Profile>;
  status: ActionTabStatus;
  setStatus: (status: ActionTabStatus) => void;
  pagination: PaginationProps;
};

export type UserDetailsProps = DataHandlerProps<Profile>;

export type CreateUserServiceType = {
  isPublic: boolean;
  name: string;
  type: EmailAddressType | PhoneNumberType | SocialMediaLinkType;
};

export type UserServiceType = 'email' | 'socialMedia' | 'phone';
