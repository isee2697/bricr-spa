import { GetUsersCountQuery, Profile } from 'api/types';
import { DataHandlerProps, PromiseFunction } from 'app/shared/types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type UserProps = {
  data: Profile[];
  total?: GetUsersCountQuery;
  onActivationChange: PromiseFunction<Profile>;
  status: ActionTabStatus;
  setStatus: (status: ActionTabStatus) => void;
  pagination: PaginationProps;
};

export type UserDetailsProps = DataHandlerProps<Profile>;
