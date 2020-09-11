import { Profile } from 'api/types';
import { DataHandlerProps, PromiseFunction } from 'app/shared/types';

export type UserProps = {
  data: Profile[];
  total?: number;
  onDelete: PromiseFunction<string>;
};

export type UserDetailsProps = DataHandlerProps<Profile>;
