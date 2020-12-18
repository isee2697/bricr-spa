import { Profile } from 'api/types';

export type ConnectKeyModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: VoidFunction;
  people: Profile[];
};

export type ConnectKeyModalContainerProps = {
  onSubmit: VoidFunction;
};
