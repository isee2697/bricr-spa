import { Profile } from 'api/types';

export type AddMemberModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: { profileIds: string[] }) => Promise<undefined | { error: boolean }>;
  userList: Profile[];
};
