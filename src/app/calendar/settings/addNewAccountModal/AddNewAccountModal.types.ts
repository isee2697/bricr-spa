import { NylasAuthorizationInput } from 'api/types';

export type AddNewAccountModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: NylasAuthorizationInput) => Promise<boolean>;
};
