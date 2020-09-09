import { ModalProps } from 'ui/molecules/modal/Modal.types';
import { Profile } from 'api/types';

export type TeamModalProps = ModalProps & {};

export type AddMemberModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: { profileIds: string[] }) => Promise<undefined | { error: boolean }>;
  userList: Profile[];
  // onAdd: () => void;
};
